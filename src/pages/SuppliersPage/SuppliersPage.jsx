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
  const [page, setPage] = useState(1);
  const { suppliers, totalPages } = useSelector(selectSuppliers);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);

  useEffect(() => {
    (() => {
      try {
        dispatch(getSuppliersThunk({ page }));
      } catch (error) {
        toast.error(error);
      }
    })();
  }, [dispatch, page]);

  return (
    <div className={css.page}>
      <div className="container">
        {isAddProductModalOpen && (
          <BaseModal setIsOpen={setIsAddProductModalOpen} type="addSupplier" />
        )}
        {isEditProductModalOpen && (
          <BaseModal
            setIsOpen={setIsEditProductModalOpen}
            type="editSupplier"
          />
        )}

        <div className={css.headerActionsWrapper}>
          <ProductsForm />
          <AddProductButton setIsOpen={setIsAddProductModalOpen} />
        </div>
      </div>

      <TableCard
        title="All suppliers"
        data={suppliers}
        type="suppliers"
        totalPages={totalPages}
        setIsOpen={setIsEditProductModalOpen}
        setPage={setPage}
      />
    </div>
  );
};

export default SuppliersPage;
