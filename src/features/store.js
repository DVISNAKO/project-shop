import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from '../features/products/productSlice';



export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice,
    },
    devTools: true,
});