import React, { createContext, useState, useContext, useEffect } from "react";
import { BASE_URL } from "../constants/urls.js";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (token, userData) => {
    setAuthToken(token);
    setUser(userData);
  };

  const logout = async () => {
    setAuthToken(null);
    setUser(null);
    try {
      await fetch(`${BASE_URL}/api/token/blacklist/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Refresh token blacklisted on logout.");
    } catch (error) {
      console.error("Error blacklisting refresh token on logout:", error);
    }
  };

  const checkAuthStatus = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/token/refresh/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Refresh token response status:", response.status);

      if (response.ok) {
        const data = await response.json();
        console.log("Refresh token response data:", data);
        setAuthToken(data.access);

        // Fetch user data after successful token refresh
        try {
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
            console.log("User data fetched successfully:", userData);
          } else {
            console.error(
              "Failed to fetch user data after refresh:",
              userResponse.status
            );
            setUser(null); // Clear user data if fetching fails
          }
        } catch (userError) {
          console.error("Error fetching user data:", userError);
          setUser(null);
        }

        console.log("Access token refreshed successfully.");
      } else {
        const errorData = await response.json();
        console.error("Refresh token failed, error data:", errorData);
        console.log("No valid refresh token or session expired.");
        setAuthToken(null);
        setUser(null);
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
      setAuthToken(null);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuthStatus();
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
