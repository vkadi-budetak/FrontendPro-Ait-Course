import { createContext } from "react";
import type User from "../types/User";

interface AuthContextType {
  user: User | undefined;
  setUser: (user: User) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

// 1 создать контекст = createContext
// 2 сделать обертку - Provider - и обернули приложение
// 3 доставать или класть в контекст информацию - useContext
