import { useEffect, useState } from "react";
import type Users from "../../types/Users";
import { Link } from "react-router-dom";

export default function UsersList() {
  const [users, setUsers] = useState<Users[]>([]);

  async function fetchUsers() {
    const res = await fetch("https://api.escuelajs.co/api/v1/users");
    const arr = await res.json();
    setUsers(arr);
  }

  useEffect(() => {
    // Добавляєм щоб не було помилки цей рядок
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchUsers();
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

//* наш сервер https://fakeapi.platzi.com/en/rest/users/
