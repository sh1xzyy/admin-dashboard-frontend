import * as yup from "yup";

export const supplierSchema = yup.object().shape({
  name: yup.string().required("Product name is required"),
  address: yup.string().required("Address field is required"),
  suppliers: yup.string().required("Company field is required"),
  date: yup.mixed().required("Date field is required").nullable(),
  amount: yup.string().required("Amount field is required"),
  status: yup
    .string()
    .oneOf(["Active", "Deactive"], "Select a valid status")
    .required("Status is required"),
});
