import { useDispatch, useSelector } from "react-redux";
import TableCard from "../../shared/ui/TableCard/TableCard";
import { useEffect } from "react";
import css from "./CustomersPage.module.css";
import toast from "react-hot-toast";
import { getCustomersThunk } from "../../entities/customers/operations";
import { CustomersForm } from "../../modules/customers";
import { selectCustomers } from "../../entities/customers/selectors";

const CustomersPage = () => {
  const { customers, totalPages } = useSelector(selectCustomers);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getCustomersThunk()).unwrap();
      } catch (error) {
        toast.error(error);
      }
    })();
  }, [dispatch]);

  return (
    <div className={css.pageWrapper}>
      <div className="container">
        <CustomersForm />
        <TableCard
          title="All customers"
          data={customers}
          type="customers"
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default CustomersPage;
