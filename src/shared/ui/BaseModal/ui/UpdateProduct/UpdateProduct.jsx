import { useForm, Controller } from "react-hook-form";
import BaseInput from "../../../Input/BaseInput/BaseInput";
import { yupResolver } from "@hookform/resolvers/yup";
import css from "./UpdateProduct.module.css";
import Button from "../../../Button/Button";
import CategorySelector from "../../../TableCard/ui/CategorySelector/CategorySelector";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsThunk,
  updateProductThunk,
} from "../../../../../entities/products/operations";
import toast from "react-hot-toast";
import { productSchema } from "../schema/productSchema";
import { selectProduct } from "../../../../../entities/products/selectors";

const categories = [
  "Medicine",
  "Head",
  "Hand",
  "Dental Care",
  "Skin Care",
  "Eye Care",
  "Vitamins & Supplements",
  "Orthopedic Products",
  "Baby Care",
];

const UpdateProduct = ({ setIsOpen, page }) => {
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
    defaultValues: {
      name: product.name || "",
      category: product.category || "",
      suppliers: product.suppliers || "",
      stock: product.stock || "",
      price: product.price || "",
    },
  });

  const onSubmit = async (values) => {
    try {
      await dispatch(
        updateProductThunk({ id: product._id, body: values })
      ).unwrap();
      dispatch(getProductsThunk({ page }));
      setIsOpen(false);
      toast.success("Successfully added a product");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={css.inputsWrapper}>
        <BaseInput
          variant="primary"
          type="text"
          error={errors?.name?.message}
          placeholder="Product Info"
          {...register("name")}
        />
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <CategorySelector
              {...field}
              error={errors?.category?.message}
              list={categories}
              placeholder="Category"
            />
          )}
        />
        <BaseInput
          variant="primary"
          type="text"
          error={errors?.suppliers?.message}
          placeholder="Suppliers"
          {...register("suppliers")}
        />
        <BaseInput
          variant="primary"
          type="text"
          error={errors?.stock?.message}
          placeholder="Stock"
          {...register("stock")}
        />
        <BaseInput
          variant="primary"
          type="text"
          error={errors?.price?.message}
          placeholder="Price"
          {...register("price")}
        />
      </div>
      <div className={css.actionButtons}>
        <Button variant="primary" text="Save" type="submit" />
        <Button
          variant="secondary"
          text="Cancel"
          type="button"
          onClick={() => setIsOpen(false)}
        />
      </div>
    </form>
  );
};

export default UpdateProduct;
