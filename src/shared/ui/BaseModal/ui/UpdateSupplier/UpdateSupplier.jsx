import { useForm, Controller } from "react-hook-form";
import BaseInput from "../../../Input/BaseInput/BaseInput";
import { yupResolver } from "@hookform/resolvers/yup";
import css from "./UpdateSupplier.module.css";
import Button from "../../../Button/Button";
import CategorySelector from "../../../TableCard/ui/CategorySelector/CategorySelector";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  getSuppliersThunk,
  updateSupplierThunk,
} from "../../../../../entities/suppliers/operations";
import { supplierSchema } from "../schema/supplierSchema";
import CustomDatePicker from "../../../TableCard/ui/CustomDatePicker/CustomDatePicker";
import { selectSupplier } from "../../../../../entities/suppliers/selectors";
import dayjs from "dayjs";

const statuses = ["Active", "Deactive"];

const UpdateSupplier = ({ setIsOpen }) => {
  const dispatch = useDispatch();
  const supplier = useSelector(selectSupplier);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(supplierSchema),
    defaultValues: {
      name: supplier.name || "",
      address: supplier.address || "",
      suppliers: supplier.suppliers || "",
      date: supplier.date ? dayjs(supplier.date) : null,
      amount: supplier.amount || "",
      status: supplier.status || "",
    },
  });

  const onSubmit = async (values) => {
    try {
      const formattedValues = {
        ...values,
        date: values.date ? dayjs(values.date).format("YYYY-MM-DD") : "",
      };
      await dispatch(
        updateSupplierThunk({ id: supplier._id, body: formattedValues })
      ).unwrap();
      await dispatch(getSuppliersThunk()).unwrap();
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
          placeholder="Suppliers Info"
          {...register("name")}
        />
        <BaseInput
          variant="primary"
          type="text"
          error={errors?.address?.message}
          placeholder="Address"
          {...register("address")}
        />
        <BaseInput
          variant="primary"
          type="text"
          error={errors?.company?.message}
          placeholder="Company"
          {...register("suppliers")}
        />
        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <CustomDatePicker
              value={field.value}
              onChange={field.onChange}
              error={errors?.date?.message}
            />
          )}
        />
        <BaseInput
          variant="primary"
          type="text"
          error={errors?.amount?.message}
          placeholder="Amount"
          {...register("amount")}
        />
        <Controller
          name="status"
          control={control}
          render={({ field }) => (
            <CategorySelector
              {...field}
              error={errors?.status?.message}
              list={statuses}
              placeholder="Status"
            />
          )}
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

export default UpdateSupplier;
