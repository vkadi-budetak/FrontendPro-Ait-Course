import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";
import clsx from "clsx";

//* функція для біблотеки clsx - стилізація кнопки
const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  clsx(s.link, isActive && s.active);

export default function NavBar() {
  return (
    <nav className={s.container}>
      <NavLink className={navLinkClass} to={"/"}>
        Home
      </NavLink>
      <NavLink className={navLinkClass} to={"/gender-reveal"}>
        GenderReveal
      </NavLink>
      <NavLink className={navLinkClass} to={"/nationalize"}>
        Nationalize
      </NavLink>
      <NavLink className={navLinkClass} to={"/contact"}>
        Contact
      </NavLink>
      {/* isActive - подсвечивания кнопки */}
      {/* <NavLink
        className={({ isActive }) => (isActive ? s.active : s.link)}
        to={"/about-us"}
      >
        About
      </NavLink> */}
      <NavLink className={navLinkClass} to={"/about-us"}>
        About
      </NavLink>

      <NavLink to={"/profile"} className={navLinkClass}>
        Profile
      </NavLink>
    </nav>
  );
}
