import { useLocation } from "react-router-dom";
import useWindowWidth from "../../shared/hooks/useWindowWidth";
import Logo from "../../shared/ui/Logo/Logo";
import css from "./Header.module.css";
import Burger from "./assets/burger.svg?react";

const Header = ({ setIsSidePartOpen }) => {
  const { windowWidth } = useWindowWidth();
  const location = useLocation();

  const path = location.pathname;
  let currentPage = null;

  switch (path) {
    case "/dashboard":
      currentPage = "Dashboard";
      break;
    case "/orders":
      currentPage = "All orders";
      break;
    case "/products":
      currentPage = "All products";
      break;
    case "/customers":
      currentPage = "All customers";
      break;
    case "/suppliers":
      currentPage = "All suppliers";
      break;
  }

  if (path)
    return (
      <div className={css.header}>
        <div className="container">
          <div className={css.wrapper}>
            {windowWidth < 1440 && (
              <button
                className={css.openSideBarButton}
                type="button"
                onClick={() => setIsSidePartOpen(true)}
              >
                <Burger className={css.icon} role="img" aria-label="burger" />
              </button>
            )}

            <Logo currentPage={currentPage} />
          </div>
        </div>
      </div>
    );
};

export default Header;
