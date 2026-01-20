import { useAuth } from "../../hooks/useAuth";

export default function ProfileData() {
  const { user } = useAuth();
  return (
    <div>
      <h1>{user?.email}</h1>
    </div>
  );
}
