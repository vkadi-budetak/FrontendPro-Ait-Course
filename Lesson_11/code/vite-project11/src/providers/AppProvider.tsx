import type { ReactNode } from "react";
import { AuthProvider } from "./AuthProvider";
import { CounterProvider } from "./CounterProvider";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AuthProvider>
      <CounterProvider>{children}</CounterProvider>
    </AuthProvider>
  );
};
