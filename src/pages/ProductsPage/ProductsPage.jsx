import { useEffect, useState } from "react";
import css from "./ProductsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import TableCard from "../../shared/ui/TableCard/TableCard";
import { selectProducts } from "../../entities/products/selectors";
import { getProductsThunk } from "../../entities/products/operations";
import { AddProductButton, ProductsForm } from "../../modules/products";
import BaseModal from "../../shared/ui/BaseModal/BaseModal";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { products, totalPages } = useSelector(selectProducts);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);

  useEffect(() => {
    (() => {
      try {
        dispatch(getProductsThunk({ page }));
      } catch (error) {
        toast.error(error);
      }
    })();
  }, [dispatch, page]);

  return (
    <div className={css.page}>
      <div className="container">
        <BaseModal
          isOpen={isAddProductModalOpen}
          setIsOpen={setIsAddProductModalOpen}
          type="addProduct"
        />
        <BaseModal
          isOpen={isEditProductModalOpen}
          setIsOpen={setIsEditProductModalOpen}
          type="editProduct"
        />
        <div className={css.headerActionsWrapper}>
          <ProductsForm />
          <AddProductButton setIsOpen={setIsAddProductModalOpen} />
        </div>
        <TableCard
          title="All products"
          data={products}
          type="products"
          totalPages={totalPages}
          setIsOpen={setIsEditProductModalOpen}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
