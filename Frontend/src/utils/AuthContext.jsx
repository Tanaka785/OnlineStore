import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useRef,
} from "react";
import { BASE_URL } from "../constants/urls.js";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../constants/routes.js";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const logoutTimerRef = useRef(null);
  const navigate = useNavigate();

  const autoLogout = () => {
    console.log("Automatic logout due to token expiry.");
    logout(true); // Pass true to indicate automatic logout
  };

  const login = (token, userData) => {
    setAuthToken(token);
    setUser(userData);
    if (token) {
      const decodedToken = jwtDecode(token);
      const expiresAt = decodedToken.exp * 1000; // Convert to milliseconds
      const timeToLogout = expiresAt - Date.now() - 60 * 1000; // 1 minute before expiry

      if (logoutTimerRef.current) {
        clearTimeout(logoutTimerRef.current);
      }
      logoutTimerRef.current = setTimeout(autoLogout, timeToLogout);
    }
  };

  const logout = async (isAutomatic = false) => {
    setAuthToken(null);
    setUser(null);
    if (logoutTimerRef.current) {
      clearTimeout(logoutTimerRef.current);
    }

    try {
      if (!isAutomatic) {
        // Only attempt to blacklist if it's a manual logout
        await fetch(`${BASE_URL}/api/token/blacklist/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Refresh token blacklisted on logout.");
      }
    } catch (error) {
      console.error("Error blacklisting refresh token on logout:", error);
    } finally {
      // Removed navigate(LOGIN) from here. Navigation to login should be handled by components
      // that require authentication or when a user explicitly logs out.
    }
  };

  const checkAuthStatus = async () => {
    console.log("checkAuthStatus called.");
    try {
      const response = await fetch(`${BASE_URL}/api/token/refresh/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      console.log("Refresh token response status:", response.status);
      console.log("Refresh token response headers:\n", Array.from(response.headers.entries()).map(([key, value]) => `${key}: ${value}`).join('\n'));
      console.log("Refresh token response text (if not JSON):\n", await response.clone().text());

      if (response.ok) {
        const data = await response.json();
        console.log("Refresh token response data:", data);
        login(data.access, null); // Pass null for user data, it will be fetched below
        console.log("Access token set from refresh.");

        // Fetch user data after successful token refresh
        try {
          console.log("Attempting to fetch user data after token refresh.");
          const userResponse = await fetch(`${BASE_URL}/auth/me/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${data.access}`,
            },
          });

          if (userResponse.ok) {
            const userData = await userResponse.json();
            setUser(userData);
            console.log("User data fetched successfully:\n", userData);
          } else {
            console.error(
              "Failed to fetch user data after refresh:",
              userResponse.status,
              await userResponse.text()
            );
            setUser(null); // Clear user data if fetching fails
            logout(true); // Auto logout if user data fetch fails
          }
        } catch (userError) {
          console.error("Error fetching user data:", userError);
          setUser(null);
          logout(true); // Auto logout if user data fetch fails
        }

        console.log("Access token refreshed successfully.");
      } else {
        let errorData = await response.text(); // Read as text first
        try {
          const jsonErrorData = JSON.parse(errorData); // Try parsing as JSON
          errorData = jsonErrorData; // If successful, use the parsed JSON
        } catch (e) {
          console.error("Failed to parse refresh token error response as JSON:", e);
        }
        console.error("Refresh token failed, error data:", errorData);
        console.log("No valid refresh token or session expired. Logging out.");
        logout(true); // Automatic logout
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
      logout(true); // Automatic logout
    } finally {
      setLoading(false);
      console.log("checkAuthStatus finished. Loading set to false.");
    }
  };

  useEffect(() => {
    console.log("useEffect in AuthProvider triggered.");
    checkAuthStatus();
    const refreshInterval = setInterval(() => {
      console.log("Interval triggered: Attempting token refresh.");
      checkAuthStatus();
    }, 4 * 60 * 1000); // Check every 4 minutes

    return () => {
      console.log("useEffect cleanup: Clearing refresh interval.");
      clearInterval(refreshInterval);
    };
  }, []);

  if (loading) {
    return <div>Loading authentication...</div>;
  }

  return (
    <AuthContext.Provider value={{ authToken, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
