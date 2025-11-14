import * as yup from "yup";
import dayjs from "dayjs";

export const supplierSchema = yup.object().shape({
  name: yup.string().required("Product name is required"),
  address: yup.string().required("Address field is required"),
  suppliers: yup.string().required("Company field is required"),
  date: yup
    .mixed()
    .nullable()
    .test("is-required", "Date field is required", (value) => {
      return value !== null && value !== undefined;
    })
    .test("is-valid-date", "Please select a valid date", (value) => {
      if (!value) return false;
      return dayjs(value).isValid();
    }),
  amount: yup.string().required("Amount field is required"),
  status: yup
    .string()
    .oneOf(["Active", "Deactive"], "Select a valid status")
    .required("Status is required"),
});
