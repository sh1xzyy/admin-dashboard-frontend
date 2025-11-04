import { useDispatch, useSelector } from "react-redux";
import TableCard from "../../shared/ui/TableCard/TableCard";
import { selectDashboard } from "../../entities/dashboard/selectors";
import { useEffect } from "react";
import { getDashboardsDataThunk } from "../../entities/dashboard/operations";
import toast from "react-hot-toast";
import css from "./DashboardPage.module.css";

const DashboardPage = () => {
  const { allProducts, allSuppliers, allCustomers, recentCustomers, finances } =
    useSelector(selectDashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getDashboardsDataThunk()).unwrap();
      } catch (error) {
        toast.error(error);
      }
    })();
  }, [dispatch]);

  return (
    <div className={css.pageWrapper}>
      <div className="container">
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
