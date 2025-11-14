import EditIcon from "./assets/edit.svg?react";
import TrashIcon from "./assets/trash.svg?react";
import css from "./Products.module.css";
import clsx from "clsx";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  deleteProductThunk,
  getProductsThunk,
} from "../../../../../entities/products/operations";
import { getProduct } from "../../../../../entities/products/slice";

const Products = ({ item, page, setIsOpen }) => {
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteProductThunk(id)).unwrap();
      dispatch(getProductsThunk({ page }));
      toast.success("Successfully deleted product");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <td className={css.td}>{item?.name}</td>
      <td className={css.td}>{item?.category}</td>
      <td className={css.td}>{item?.stock}</td>
      <td className={css.td}>{item?.suppliers}</td>
      <td className={css.td}>{item?.price}</td>
      <td className={css.td}>
        <div className={css.actionsWrapper}>
          <button
            className={clsx(css.iconButton, css.edit)}
            onClick={() => {
              setIsOpen(true);
              dispatch(getProduct(item._id));
            }}
          >
            <EditIcon role="img" aria-label="edit icon" />
          </button>
          <button
            className={clsx(css.iconButton, css.trash)}
            onClick={() => handleDelete(item?._id)}
          >
            <TrashIcon role="img" aria-label="trash icon" />
          </button>
        </div>
      </td>
    </>
  );
};

export default Products;
