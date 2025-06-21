import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchProfile, logout as apiLogout } from "../api";
import { CLIENT_TYPE } from "../constants/clientType";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user profile on mount
  useEffect(() => {
    refreshUser();
    // eslint-disable-next-line
  }, []);

  // Refetch user profile and update state
  const refreshUser = async () => {
    setLoading(true);
    try {
      const res = await fetchProfile(CLIENT_TYPE);
      setUser(res.data.user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await apiLogout(CLIENT_TYPE);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
