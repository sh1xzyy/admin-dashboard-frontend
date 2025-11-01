import { Navigate } from "react-router-dom";

const RestrictedRoutes = ({ children, redirectTo }) => {
  const isLoggedIn = false;
  return !isLoggedIn ? children : <Navigate to={redirectTo} />;
};

export default RestrictedRoutes;
