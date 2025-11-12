import { useLocation } from "react-router-dom";
import useWindowWidth from "../../shared/hooks/useWindowWidth";
import Logo from "../../shared/ui/Logo/Logo";
import css from "./Header.module.css";
import Burger from "./assets/burger.svg?react";
import { getPath } from "./shared/path/getPath";
import LogoutButton from "../../shared/ui/LogoutButton/LogoutButton";
import LogoText from "../../shared/ui/Logo/LogoText";

const Header = ({ setIsSidePartOpen }) => {
  const { windowWidth } = useWindowWidth();
  const location = useLocation();

  const path = location.pathname;

  return (
    <div className={css.header}>
      {windowWidth >= 1440 && (
        <div className={css.logoDesktopWrapper}>
          <Logo />
          <div className="logoContainer">
            <LogoText currentPage={getPath(path)} />
            <LogoutButton />
          </div>
        </div>
      )}
      <div className="container">
        <div className={css.wrapper}>
          <div className={css.leftSideWrapper}>
            {windowWidth < 1440 && (
              <button
                className={css.openSideBarButton}
                type="button"
                onClick={() => setIsSidePartOpen(true)}
              >
                <Burger className={css.icon} role="img" aria-label="burger" />
              </button>
            )}

            {windowWidth < 1440 && (
              <div className={css.logoWrapper}>
                <Logo />
                <LogoText currentPage={getPath(path)} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
