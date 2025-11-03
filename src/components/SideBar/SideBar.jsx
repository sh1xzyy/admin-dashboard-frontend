import css from "./SideBar.module.css";
import FlaskFill from "./assets/flask-fill.svg?react";
import Grid from "./assets/grid.svg?react";
import Pharmacy from "./assets/pharmacy.svg?react";
import ShoppingCard from "./assets/shopping-cart.svg?react";
import Users from "./assets/users.svg?react";
import Close from "./assets/close.svg?react";
import Logout from "./assets/logout.svg?react";
import useWindowWidth from "../../shared/hooks/useWindowWidth";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const SideBar = ({ setIsSidePartOpen }) => {
  const { windowWidth } = useWindowWidth();
  const LINKS = [
    {
      icon: <Grid className={css.icon} role="img" aria-label="Grid" />,
      href: "/dashboard",
    },
    {
      icon: (
        <ShoppingCard
          className={css.icon}
          role="img"
          aria-label="ShoppingCard"
        />
      ),
      href: "/orders",
    },
    {
      icon: (
        <FlaskFill className={css.icon} role="img" aria-label="Flask Fill" />
      ),
      href: "/products",
    },
    {
      icon: <Pharmacy className={css.icon} role="img" aria-label="Pharmacy" />,
      href: "/customers",
    },
    {
      icon: <Users className={css.icon} role="img" aria-label="Users" />,
      href: "/suppliers",
    },
  ];

  return (
    <div className={css.overlay}>
      <div className={css.sideBar}>
        {windowWidth < 1440 && (
          <button
            className={css.closeButton}
            type="button"
            onClick={() => setIsSidePartOpen(false)}
          >
            <Close
              className={css.closeIcon}
              role="img"
              aria-label="Close icon"
            />
          </button>
        )}

        <nav className={css.nav}>
          <ul className={css.navList}>
            {LINKS.map(({ icon, href }, i) => (
              <li key={i}>
                <NavLink
                  className={({ isActive }) =>
                    clsx(css.link, isActive && css.active)
                  }
                  to={href}
                >
                  {icon}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {windowWidth < 1440 && (
          <button
            className={css.logoutButton}
            type="button"
            onClick={() => console.log("log out")}
          >
            <Logout className={css.icon} role="img" aria-label="Logout icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SideBar;
