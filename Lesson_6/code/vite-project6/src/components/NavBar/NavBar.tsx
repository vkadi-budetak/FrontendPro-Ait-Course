import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={s.container}>
      <NavLink className={s.link} to={"/"}>
        Home
      </NavLink>
      <NavLink className={s.link} to={"/gender-reveal"}>
        GenderReveal{" "}
      </NavLink>
      <NavLink className={s.link} to={"/nationalize"}>
        Nationalize{" "}
      </NavLink>
    </nav>
  );
}
