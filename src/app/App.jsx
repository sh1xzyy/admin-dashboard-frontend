import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "../shared/routes/PrivateRoutes";
import RestrictedRoutes from "../shared/routes/RestrictedRoutes";

const DashboardPage = lazy(() =>
  import("../pages/DashboardPage/DashboardPage")
);
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const OrdersPage = lazy(() => import("../pages/OrdersPage/OrdersPage"));
const ProductsPage = lazy(() => import("../pages/ProductsPage/ProductsPage"));
const SharedLayout = lazy(() => import("../pages/SharedLayout/SharedLayout"));
const CustomersPage = lazy(() =>
  import("../pages/CustomersPage/CustomersPage")
);
const SuppliersPage = lazy(() =>
  import("../pages/SuppliersPage/SuppliersPage")
);

function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <RestrictedRoutes to="/">
            <LoginPage />
          </RestrictedRoutes>
        }
      />
      <Route
        path="/"
        element={
          <PrivateRoutes to="/login">
            <SharedLayout />
          </PrivateRoutes>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoutes to="/login">
            <DashboardPage />
          </PrivateRoutes>
        }
      />
      <Route
        path="/orders"
        element={
          <PrivateRoutes to="/login">
            <OrdersPage />
          </PrivateRoutes>
        }
      />
      <Route
        path="/products"
        element={
          <PrivateRoutes to="/login">
            <ProductsPage />
          </PrivateRoutes>
        }
      />
      <Route
        path="/customers"
        element={
          <PrivateRoutes to="/login">
            <CustomersPage />
          </PrivateRoutes>
        }
      />
      <Route
        path="/suppliers"
        element={
          <PrivateRoutes to="/login">
            <SuppliersPage />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
}

export default App;
