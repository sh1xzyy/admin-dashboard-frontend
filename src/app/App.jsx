import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import PrivateRoutes from "../shared/routes/PrivateRoutes";
import RestrictedRoutes from "../shared/routes/RestrictedRoutes";
import Loader from "../shared/ui/Loader/Loader";
import SideBar from "../components/SideBar/SideBar";
import Header from "../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../entities/auth/selectors";
import { refreshThunk } from "../entities/auth/operations";

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

function App() {
  const [isSidePartOpen, setIsSidePartOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    (() => {
      dispatch(refreshThunk());
    })();
  }, [dispatch]);

  return (
    <>
      {isLoggedIn && <Header setIsSidePartOpen={setIsSidePartOpen} />}
      {isSidePartOpen && <SideBar setIsSidePartOpen={setIsSidePartOpen} />}
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
