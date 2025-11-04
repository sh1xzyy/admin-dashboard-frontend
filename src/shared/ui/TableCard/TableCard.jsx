import { CUSTOMERS } from "./data/customers";
import css from "./TableCard.module.css";

const TableCard = ({ title, type }) => {
  const LABELS = [
    { type: "dashboard", list: ["Name", "Email", "Spent"] },
    {
      type: "orders",
      list: [
        "User Info",
        "Address",
        "Products",
        "Order date",
        "Price",
        "Status",
      ],
    },
    {
      type: "products",
      list: [
        "Product Info",
        "Category",
        "Stock",
        "Suppliers",
        "Price",
        "Action",
      ],
    },
    {
      type: "suppliers",
      list: [
        "Suppliers Info",
        "Address",
        "Company",
        "Delivery date",
        "Ammount",
        "Status",
        "Action",
      ],
    },
    {
      type: "customers",
      list: ["User Info", "Email", "Delivery date", "Phone", "Register date"],
    },
    { type: "income/expenses", list: ["Today"] },
  ];

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
            {CUSTOMERS.map((item, i) => (
              <tr className={css.tr} key={i}>
                <td className={css.td}>
                  <div className={css.userInfo}>
                    <img
                      className={css.image}
                      src={item.image}
                      alt={item.name}
                    />
                    <span className={css.text}>{item.name}</span>
                  </div>
                </td>
                <td className={css.td}>{item.email}</td>
                <td className={css.td}>{item.spent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableCard;
