import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children, redirectTo }) => {
  const isLoggedIn = true;
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoutes;
