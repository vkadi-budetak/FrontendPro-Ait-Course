import { useState, useEffect } from "react";
import type User from "../../types/User";

export function useUserById(id: string | undefined) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [message, setMessage] = useState("");

  async function fetchUserById(id: string | undefined) {
    try {
      const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
      const userData = await res.json();
      setUser(userData);
    } catch (err) {
      if (err instanceof Error) setMessage(err.message);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchUserById(id);
  }, [id]);
  return { user, message };
}
