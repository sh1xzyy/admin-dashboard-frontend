import css from "./AddProductButton.module.css";
import AddIcon from "../assets/add.svg?react";
import { Button } from "@blueprintjs/core";

export const AddProductButton = () => {
  return (
    <div className={css.wrapper}>
      <Button className={css.addProductButton}>
        <AddIcon role="img" aria-label="add icon" />
      </Button>
      <span className={css.text}>Add a new product</span>
    </div>
  );
};
