import { Link } from "react-router-dom";
import type Users from "../../types/Users";
import type { FC } from "react";

export const UserPage: FC<Users> = ({
  id,
  email,
  password,
  name,
  role,
  avatar,
}) => {
  return (
    <div>
      <h2>UserPage</h2>
      <h3>
        <Link to={`/user-list/${id}`}>{name}</Link>
      </h3>
      <p>{email}</p>
      <p>{password}</p>
      <p>{name}</p>
      <p>{role}</p>
      <img src={avatar[0]} alt={name} />
    </div>
  );
};
