import { useEffect } from "react";
import css from "./ProductsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import TableCard from "../../shared/ui/TableCard/TableCard";
import { selectProducts } from "../../entities/products/selectors";
import { getProductsThunk } from "../../entities/products/operations";
import { ProductsForm } from "../../modules/products";
import { Button } from "@blueprintjs/core";
import AddProductButton from "../../modules/products/addProductButton/AddProductButton";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { products, totalPages } = useSelector(selectProducts);

  useEffect(() => {
    (() => {
      try {
        dispatch(getProductsThunk());
      } catch (error) {
        toast.error(error);
      }
    })();
  }, [dispatch]);

  return (
    <div className={css.page}>
      <div className="container">
        <div className={css.headerActionsWrapper}>
          <ProductsForm />
          <AddProductButton />
        </div>
        <TableCard
          title="All products"
          data={products}
          type="products"
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
