import { Button } from "@blueprintjs/core";
import EditIcon from "./assets/edit.svg?react";
import TrashIcon from "./assets/trash.svg?react";
import css from "./Products.module.css";
import clsx from "clsx";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { deleteProductThunk } from "../../../../../entities/products/operations";

const Products = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteProductThunk(id)).unwrap();
      toast.success("Successfully deleted product");
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <tr className={css.tr} key={item._id}>
      <td className={css.td}>{item?.name}</td>
      <td className={css.td}>{item?.category}</td>
      <td className={css.td}>{item?.stock}</td>
      <td className={css.td}>{item?.suppliers}</td>
      <td className={css.td}>{item?.price}</td>
      <td className={css.td}>
        <div className={css.actionsWrapper}>
          <Button className={clsx(css.iconButton, css.edit)}>
            <EditIcon role="img" aria-label="edit icon" />
          </Button>
          <Button
            className={clsx(css.iconButton, css.trash)}
            onClick={() => handleDelete(item?._id)}
          >
            <TrashIcon role="img" aria-label="trash icon" />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default Products;
