import { useEffect, useState, type ReactNode } from "react";
import type User from "../types/User";
import { AuthContext } from "../context/AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>();
  const token = localStorage.getItem("access_token");

  const fetchProfile = async (token: string) => {
    const res = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
      headers: { Authorization: `Bearer ${token}`, accept: "Application/json" },
    });
    const userRes = await res.json();
    setUser(userRes);
  };

  useEffect(() => {
    if (token) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      fetchProfile(token);
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
