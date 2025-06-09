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

      if (response.ok) {
        const data = await response.json();
        setAuthToken(data.access);
        console.log("Access token refreshed successfully.");
      } else {
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
