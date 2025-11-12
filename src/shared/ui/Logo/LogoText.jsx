import { useSelector } from "react-redux";
import css from "./LogoText.module.css";
import { selectUser } from "../../../entities/auth/selectors";
const LogoText = ({ currentPage }) => {
  const user = useSelector(selectUser);
  return (
    <div className={css.commonLogoTextWrapper}>
      <span className={css.commonLogoText}>Medicine store</span>
      <div className={css.subtitle}>
        <span>{currentPage}</span>
        <span>&nbsp;|&nbsp;</span>
        <span>{user?.email}</span>
      </div>
    </div>
  );
};

export default LogoText;
