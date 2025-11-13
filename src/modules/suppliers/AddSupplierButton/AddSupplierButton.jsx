import css from "./AddProductButton.module.css";
import AddIcon from "../assets/add.svg?react";

export const AddSupplierButton = ({ setIsOpen }) => {
  return (
    <div className={css.wrapper}>
      <button className={css.addProductButton} onClick={() => setIsOpen(true)}>
        <AddIcon role="img" aria-label="add icon" />
      </button>
      <span className={css.text}>Add a new product</span>
    </div>
  );
};
