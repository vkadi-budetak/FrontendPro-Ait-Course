//! Кастомний хук

import { useState, useEffect } from "react";
import type Users from "../../types/User";

export function useUsers() {
  const [users, setUsers] = useState<Users[]>([]);
  const [message, setMessage] = useState("");

  async function fetchUsers() {
    const res = await fetch("https://api.escuelajs.co/api/v1/users");
    try {
      if (!res.ok) {
        throw new Error(`Faild to fetch with status ${res.status}`);
      }
      const arr = await res.json();
      setUsers(arr);
    } catch (err) {
      if (err instanceof Error) setMessage(err.message);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, message };
}
