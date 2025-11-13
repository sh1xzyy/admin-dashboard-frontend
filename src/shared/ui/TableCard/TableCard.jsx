import { LABELS } from "./shared/data/labels";
import css from "./TableCard.module.css";
import Customers from "./ui/Customers/Customers";
import Finances from "./ui/Finances/Finances";
import Orders from "./ui/Orders/Orders";
import Products from "./ui/Products/Products";
import RecentCustomers from "./ui/RecentCustomers/RecentCustomers";
import Suppliers from "./ui/Suppliers/Suppliers";
import DotPagination from "./ui/DotPagination/DotPagination";
import clsx from "clsx";

const TableCard = ({ title, data, type, setIsOpen, totalPages, setPage }) => {
  const labelsIndex = LABELS.findIndex((item) => item.type === type);
  const headers = LABELS[labelsIndex].list;

  return (
    <div className={css.wrapper}>
      <div
        className={clsx(
          type === "dashboard" || type === "income/expenses"
            ? css.defaultTableContainer
            : css.tableContainer
        )}
      >
        <div
          className={clsx(
            type === "dashboard" || type === "income/expenses"
              ? css.defaultTableWrapper
              : css.tableWrapper
          )}
        >
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
                      ) : type === "products" ? (
                        <Products item={item} setIsOpen={setIsOpen} />
                      ) : type === "suppliers" ? (
                        <Suppliers item={item} setIsOpen={setIsOpen} />
                      ) : (
                        type === "customers" && <Customers item={item} />
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {totalPages > 0 && <DotPagination total={totalPages} setPage={setPage} />}
    </div>
  );
};

export default TableCard;
