import { lazy, Suspense, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loader from "../shared/ui/Loader/Loader";
import SideBar from "../components/SideBar/SideBar";
import Header from "../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../entities/auth/selectors";
import useWindowWidth from "../shared/hooks/useWindowWidth";
import { getUserInfoThunk, refreshThunk } from "../entities/auth/operations";
import RestrictedRoutes from "../shared/routes/RestrictedRoutes";
import PrivateRoutes from "../shared/routes/PrivateRoutes";

const DashboardPage = lazy(() =>
  import("../pages/DashboardPage/DashboardPage")
);
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const OrdersPage = lazy(() => import("../pages/OrdersPage/OrdersPage"));
const ProductsPage = lazy(() => import("../pages/ProductsPage/ProductsPage"));
const CustomersPage = lazy(() =>
  import("../pages/CustomersPage/CustomersPage")
);
const SuppliersPage = lazy(() =>
  import("../pages/SuppliersPage/SuppliersPage")
);
const SharedLayoutPage = lazy(() =>
  import("../pages/SharedLayoutPage/SharedLayoutPage")
);

function App() {
  const { windowWidth } = useWindowWidth();
  const [isSidePartOpen, setIsSidePartOpen] = useState(windowWidth >= 1440);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(refreshThunk()).unwrap();
      dispatch(getUserInfoThunk());
    })();
  }, [dispatch]);

  useEffect(() => {
    setIsSidePartOpen(windowWidth >= 1440);
  }, [windowWidth]);

  return (
    <>
      {isLoggedIn && <Header setIsSidePartOpen={setIsSidePartOpen} />}
      {isSidePartOpen && isLoggedIn && (
        <SideBar setIsSidePartOpen={setIsSidePartOpen} />
      )}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/login"
            element={
              <RestrictedRoutes redirectTo="/dashboard">
                <LoginPage />
              </RestrictedRoutes>
            }
          />
          <Route
            path="/"
            element={
              <PrivateRoutes redirectTo="/login">
                <Navigate to="/dashboard" />
              </PrivateRoutes>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoutes redirectTo="/login">
                <DashboardPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/orders"
            element={
              <PrivateRoutes redirectTo="/login">
                <OrdersPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/products"
            element={
              <PrivateRoutes redirectTo="/login">
                <ProductsPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/customers"
            element={
              <PrivateRoutes redirectTo="/login">
                <CustomersPage />
              </PrivateRoutes>
            }
          />
          <Route
            path="/suppliers"
            element={
              <PrivateRoutes redirectTo="/login">
                <SuppliersPage />
              </PrivateRoutes>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
