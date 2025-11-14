import { useForm, Controller } from "react-hook-form";
import BaseInput from "../../../Input/BaseInput/BaseInput";
import { yupResolver } from "@hookform/resolvers/yup";
import css from "./AddSupplier.module.css";
import Button from "../../../Button/Button";
import CategorySelector from "../../../TableCard/ui/CategorySelector/CategorySelector";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import {
  addSupplierThunk,
  getSuppliersThunk,
} from "../../../../../entities/suppliers/operations";
import CustomDatePicker from "../../../TableCard/ui/CustomDatePicker/CustomDatePicker";
import { supplierSchema } from "../schema/supplierSchema";

const statuses = ["Active", "Deactive"];

const AddSupplier = ({ setIsOpen }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(supplierSchema),
  });

  const onSubmit = async (values) => {
    try {
      const formattedValues = {
        ...values,
        date: values.date ? values.date.format("YYYY-MM-DD") : null,
      };
      await dispatch(addSupplierThunk(formattedValues)).unwrap();
      await dispatch(getSuppliersThunk()).unwrap();
      setIsOpen(false);
      toast.success("Successfully added supplier");
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
        <Button variant="primary" text="Add" type="submit" />
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

export default AddSupplier;
