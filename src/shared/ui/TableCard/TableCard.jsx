import { LABELS } from "./shared/data/labels";
import css from "./TableCard.module.css";
import DotPagination from "./ui/DotPagination/DotPagination";
import Finances from "./ui/Finances/Finances";
import Orders from "./ui/Orders/Orders";
import RecentCustomers from "./ui/RecentCustomers/RecentCustomers";

const TableCard = ({ title, data, type, totalPages }) => {
  const labelsIndex = LABELS.findIndex((item) => item.type === type);
  const headers = LABELS[labelsIndex].list;

  return (
    <div className={css.tableCard}>
      <div className={css.titleWrapper}>
        <h2 className={css.title}>{title}</h2>
      </div>

      <div className={css.contentWrapper}>
        <table className={css.table}>
          <thead>
            <tr>
              {headers.map((label, i) => (
                <th className={css.th} key={i}>
                  {label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <>
                {type === "dashboard" ? (
                  <RecentCustomers item={item} />
                ) : type === "income/expenses" ? (
                  <Finances item={item} />
                ) : type === "orders" ? (
                  <Orders item={item} />
                ) : null}
              </>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages && <DotPagination total={totalPages} />}
    </div>
  );
};

export default TableCard;
