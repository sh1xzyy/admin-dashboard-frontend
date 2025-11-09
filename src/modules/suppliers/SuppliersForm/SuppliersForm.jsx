import { useForm } from "react-hook-form";
import css from "./SuppliersForm.module.css";
import BaseInput from "../../../shared/ui/Input/BaseInput/BaseInput";
import Button from "../../../shared/ui/Button/Button";
import FilterIcon from "../assets/filter.svg?react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { getSuppliersThunk } from "../../../entities/suppliers/operations";

export const SuppliersForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    try {
      await dispatch(getSuppliersThunk(values)).unwrap();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <BaseInput
        variant="primary"
        placeholder="User Name"
        {...register("name")}
      />
      <Button type="submit" text="Filter" variant="primary">
        <FilterIcon role="img" aria-label="filter icon" />
      </Button>
    </form>
  );
};
