import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../entities/auth/slice.js";
import dashboardReducer from "../entities/dashboard/slice.js";
import ordersReducer from "../entities/orders/slice.js";
import productsReducer from "../entities/products/slice.js";
import suppliersReducer from "../entities/suppliers/slice.js";
import customersReducer from "../entities/customers/slice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
    orders: ordersReducer,
    products: productsReducer,
    suppliers: suppliersReducer,
    customers: customersReducer,
  },
});
