import { useEffect, useState } from "react";
import css from "./OrdersPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersThunk } from "../../entities/orders/operations";
import toast from "react-hot-toast";
import { selectOrders } from "../../entities/orders/selectors";
import { OrdersForm } from "../../modules/orders";
import TableCard from "../../shared/ui/TableCard/TableCard";

const OrdersPage = () => {
  const dispatch = useDispatch();
  const { orders, totalPages } = useSelector(selectOrders);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (() => {
      try {
        dispatch(getOrdersThunk());
      } catch (error) {
        toast.error(error);
      }
    })();
  }, [dispatch]);

  return (
    <div className={css.page}>
      <div className="container">
        <OrdersForm />
        <TableCard
          title="All orders"
          data={orders}
          type="orders"
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default OrdersPage;
