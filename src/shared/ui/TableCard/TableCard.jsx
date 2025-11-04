import { LABELS } from "./shared/data/labels";
import css from "./TableCard.module.css";
import Finances from "./ui/Finances/Finances";
import RecentCustomers from "./ui/RecentCustomers/RecentCustomers";

const TableCard = ({ title, data, type }) => {
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
                ) : (
                  <Finances item={item} />
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableCard;
