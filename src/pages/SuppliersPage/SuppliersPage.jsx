import { useEffect, useState } from "react";
import css from "./SuppliersPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import TableCard from "../../shared/ui/TableCard/TableCard";
import { AddProductButton, ProductsForm } from "../../modules/products";
import BaseModal from "../../shared/ui/BaseModal/BaseModal";
import { getSuppliersThunk } from "../../entities/suppliers/operations";
import { selectSuppliers } from "../../entities/suppliers/selectors";

const SuppliersPage = () => {
  const dispatch = useDispatch();
  const { suppliers, totalPages } = useSelector(selectSuppliers);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);

  useEffect(() => {
    (() => {
      try {
        dispatch(getSuppliersThunk());
      } catch (error) {
        toast.error(error);
      }
    })();
  }, [dispatch]);

  return (
    <div className={css.page}>
      <div className="container">
        <BaseModal
          isOpen={isAddProductModalOpen}
          setIsOpen={setIsAddProductModalOpen}
          type="addSupplier"
        />
        <BaseModal
          isOpen={isEditProductModalOpen}
          setIsOpen={setIsEditProductModalOpen}
          type="editSupplier"
        />
        <div className={css.headerActionsWrapper}>
          <ProductsForm />
          <AddProductButton setIsOpen={setIsAddProductModalOpen} />
        </div>
        <TableCard
          title="All suppliers"
          data={suppliers}
          type="suppliers"
          totalPages={totalPages}
          setIsOpen={setIsEditProductModalOpen}
        />
      </div>
    </div>
  );
};

export default SuppliersPage;
