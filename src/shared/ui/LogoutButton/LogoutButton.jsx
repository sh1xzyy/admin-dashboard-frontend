import { useDispatch } from "react-redux";
import css from "./LogoutButton.module.css";
import Logout from "./assets/logout.svg?react";
import { logoutThunk } from "../../../entities/auth/operations";
import toast from "react-hot-toast";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logoutThunk()).unwrap();
      toast.success("Successfully logout");
    } catch (error) {
      toast.error("Logout failed", error);
    }
  };

  return (
    <button className={css.logoutButton} type="button" onClick={handleLogout}>
      <Logout className={css.icon} role="img" aria-label="Logout icon" />
    </button>
  );
};

export default LogoutButton;
