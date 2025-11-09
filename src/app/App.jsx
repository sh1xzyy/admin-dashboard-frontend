import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../shared/ui/Loader/Loader";
import SideBar from "../components/SideBar/SideBar";
import Header from "../components/Header/Header";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../entities/auth/selectors";
import useWindowWidth from "../shared/hooks/useWindowWidth";

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

  console.log(isSidePartOpen);

  useEffect(() => {
    setIsSidePartOpen(windowWidth >= 1440);
  }, [windowWidth]);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   (() => {
  //     dispatch(refreshThunk());
  //   })();
  // }, [dispatch]);

  return (
    <>
      {isLoggedIn && <Header setIsSidePartOpen={setIsSidePartOpen} />}
      {isSidePartOpen && isLoggedIn && (
        <SideBar setIsSidePartOpen={setIsSidePartOpen} />
      )}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<SharedLayoutPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/suppliers" element={<SuppliersPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
