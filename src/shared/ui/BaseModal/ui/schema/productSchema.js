import * as yup from "yup";

export const productSchema = yup.object().shape({
  name: yup.string().required("Product name is required"),

  category: yup
    .string()
    .oneOf(
      [
        "Medicine",
        "Head",
        "Hand",
        "Dental Care",
        "Skin Care",
        "Eye Care",
        "Vitamins & Supplements",
        "Orthopedic Products",
        "Baby Care",
      ],
      "Select a valid category"
    )
    .required("Category is required"),

  suppliers: yup.string().required("Suppliers field is required"),

  stock: yup
    .number()
    .typeError("Stock must be a number")
    .required("Stock is required"),

  price: yup
    .number()
    .typeError("Price must be a number")
    .required("Price is required"),
});
