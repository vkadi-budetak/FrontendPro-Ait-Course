import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";
import clsx from "clsx";
import { ROUTES } from "../../shared/routes";

//* функція для біблотеки clsx - стилізація кнопки
const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  clsx(s.link, isActive && s.active);

export default function NavBar() {
  return (
    <nav className={s.container}>
      <NavLink className={navLinkClass} to={ROUTES.HOME}>
        Home
      </NavLink>
      <NavLink className={navLinkClass} to={ROUTES.GENDER_REVEAL}>
        GenderReveal
      </NavLink>
      <NavLink className={navLinkClass} to={ROUTES.NATIONALIZE}>
        Nationalize
      </NavLink>
      <NavLink className={navLinkClass} to={ROUTES.CONTACTS}>
        Contact
      </NavLink>
      {/* isActive - подсвечивания кнопки */}
      {/* <NavLink
        className={({ isActive }) => (isActive ? s.active : s.link)}
        to={"/about-us"}
      >
        About
      </NavLink> */}
      <NavLink className={navLinkClass} to={ROUTES.ABOUT}>
        About
      </NavLink>

      <NavLink to={ROUTES.PROFILE} className={navLinkClass}>
        Profile
      </NavLink>

      <NavLink to={ROUTES.USERS} className={navLinkClass}>
        Users
      </NavLink>
    </nav>
  );
}
