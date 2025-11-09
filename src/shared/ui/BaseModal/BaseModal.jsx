import { Button, Dialog } from "@blueprintjs/core";
import css from "./BaseModal.module.css";
import CloseIcon from "./assets/close.svg?react";
import AddProduct from "./ui/AddProduct/AddProduct";
import UpdateProduct from "./ui/UpdateProduct/UpdateProduct";
import UpdateSupplier from "./ui/UpdateSupplier/UpdateSupplier";
import AddSupplier from "./ui/AddSupplier/AddSupplier";

const BaseModal = ({ isOpen, setIsOpen, type }) => {
  const title = {
    addProduct: "Add a new product",
    editProduct: "Edit data",
    addSupplier: "Add a new suppliers",
    editSupplier: "Edit supplier",
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
        ) : type === "addSupplier" ? (
          <AddSupplier setIsOpen={setIsOpen} />
        ) : type === "editSupplier" ? (
          <UpdateSupplier setIsOpen={setIsOpen} />
        ) : null}
      </div>
    </Dialog>
  );
};

export default BaseModal;
