import clsx from "clsx";
import css from "./Finances.module.css";
const Finances = ({ item }) => {
  const styleByType =
    item.type === "Expense"
      ? css.expense
      : item.type === "Income"
      ? css.income
      : item.type === "Error" && css.error;

  return (
    <tr className={css.tr} key={item._id}>
      <td className={css.td}>
        <div className={clsx(css.label, styleByType)}>
          <span className={clsx(css.type, styleByType)}>{item.type}</span>
        </div>
      </td>
      <td className={css.td}>
        <span className={css.name}>{item.name}</span>
      </td>
      <td className={css.td}>
        <span className={clsx(css.amount, styleByType)}>{item.amount}</span>
      </td>
    </tr>
  );
};

export default Finances;
