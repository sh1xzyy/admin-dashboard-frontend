import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../entities/auth/selectors";
import { useEffect } from "react";

const RestrictedRoutes = ({ children, redirectTo }) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate(redirectTo, { replace: true });
    }
  }, [isLoggedIn, navigate, redirectTo]);

  if (isLoggedIn) return null;

  return children;
};

export default RestrictedRoutes;
