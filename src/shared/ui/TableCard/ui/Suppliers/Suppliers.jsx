import EditIcon from "./assets/edit.svg?react";
import css from "./Suppliers.module.css";
import clsx from "clsx";

const Suppliers = ({ item, setIsOpen }) => {
  return (
    <tr className={css.tr} key={item._id}>
      <td className={css.td}>{item?.name}</td>
      <td className={css.td}>{item?.address}</td>
      <td className={css.td}>{item?.suppliers}</td>
      <td className={css.td}>{item?.date}</td>
      <td className={css.td}>{item?.amount}</td>
      <td className={css.td}>
        <div
          className={clsx(
            css.label,
            item.status === "Active" ? css.active : css.deactive
          )}
        >
          {item?.status}
        </div>
      </td>
      <td className={css.td}>
        <button className={css.button} onClick={() => setIsOpen(true)}>
          <div className={css.btnContentWrapper}>
            <EditIcon role="img" aria-label="edit icon" />
            <span className={css.buttonText}>Edit</span>
          </div>
        </button>
      </td>
    </tr>
  );
};

export default Suppliers;
