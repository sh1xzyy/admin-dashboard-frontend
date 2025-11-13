import { useDispatch, useSelector } from "react-redux";
import TableCard from "../../shared/ui/TableCard/TableCard";
import { useEffect, useState } from "react";
import css from "./CustomersPage.module.css";
import toast from "react-hot-toast";
import { getCustomersThunk } from "../../entities/customers/operations";
import { CustomersForm } from "../../modules/customers";
import { selectCustomers } from "../../entities/customers/selectors";

const CustomersPage = () => {
  const { customers, totalPages } = useSelector(selectCustomers);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getCustomersThunk({ page })).unwrap();
      } catch (error) {
        toast.error(error);
      }
    })();
  }, [dispatch, page]);

  return (
    <div className={css.page}>
      <div className="container">
        <CustomersForm />
      </div>

      <TableCard
        title="All customers"
        data={customers}
        type="customers"
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default CustomersPage;
