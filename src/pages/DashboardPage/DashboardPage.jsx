import { useDispatch, useSelector } from "react-redux";
import TableCard from "../../shared/ui/TableCard/TableCard";
import { selectDashboard } from "../../entities/dashboard/selectors";
import { useEffect } from "react";
import { getDashboardsThunk } from "../../entities/dashboard/operations";
import css from "./DashboardPage.module.css";
import SmallCard from "../../shared/ui/SmallCard/SmallCard";
import toast from "react-hot-toast";

const DashboardPage = () => {
  const { allProducts, allSuppliers, allCustomers, recentCustomers, finances } =
    useSelector(selectDashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getDashboardsThunk()).unwrap();
      } catch (error) {
        toast.error(error);
      }
    })();
  }, [dispatch]);

  return (
    <div className={css.pageWrapper}>
      <div className="container">
        <div className={css.cardsWrapper}>
          <SmallCard number={allProducts} type="products" />
          <SmallCard number={allSuppliers} type="suppliers" />
          <SmallCard number={allCustomers} type="customers" />
        </div>
        <div className={css.tableWrapper}>
          <TableCard
            title="Recent Customers"
            data={recentCustomers}
            type="dashboard"
          />

          <TableCard
            title="Income/Expenses"
            data={finances}
            type="income/expenses"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
