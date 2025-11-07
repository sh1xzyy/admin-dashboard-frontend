import clsx from "clsx";
import css from "./Orders.module.css";
const Orders = ({ item }) => {
  const { status, price, order_date } = item.order_id;

  const cssByStatus = {
    Completed: css.completed,
    Confirmed: css.confirmed,
    Pending: css.pending,
    Cancelled: css.cancelled,
    Processing: css.processing,
    Shipped: css.shipped,
    Delivered: css.delivered,
  };

  return (
    <tr className={css.tr} key={item._id}>
      <td className={css.td}>
        <div className={css.userInfo}>
          <img className={css.photo} src={item.photo} alt={item.name} />
          <span className={css.text}>{item.name}</span>
        </div>
      </td>
      <td className={css.td}>{item.address}</td>
      <td className={css.td}>{item.product_ids}</td>
      <td className={css.td}>{order_date}</td>
      <td className={css.td}>{price}</td>
      <td className={css.td}>
        <div className={clsx(css.label, cssByStatus[status])}>{status}</div>
      </td>
    </tr>
  );
};

export default Orders;
