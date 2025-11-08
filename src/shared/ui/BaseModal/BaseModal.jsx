import { Button, Dialog } from "@blueprintjs/core";
import css from "./BaseModal.module.css";
import CloseIcon from "./assets/close.svg?react";
import AddProduct from "./ui/AddProduct/AddProduct";
import UpdateProduct from "./ui/UpdateProduct/UpdateProduct";

const BaseModal = ({ isOpen, setIsOpen, type }) => {
  const title = {
    addProduct: "Add a new product",
    editProduct: "Edit data",
    addSupplier: "Add a new suppliers",
  };
  return (
    <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className={css.modal}>
        <Button className={css.closeButton} onClick={() => setIsOpen(false)}>
          <CloseIcon role="img" aria-label="close icon" />
        </Button>
        <h2 className={css.title}>{title[type]}</h2>
        {type === "addProduct" ? (
          <AddProduct setIsOpen={setIsOpen} />
        ) : type === "editProduct" ? (
          <UpdateProduct setIsOpen={setIsOpen} />
        ) : null}
      </div>
    </Dialog>
  );
};

export default BaseModal;
