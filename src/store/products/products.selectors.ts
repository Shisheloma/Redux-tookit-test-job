import { AppState } from "../store";

export const selectProductsData = (state: AppState) => state.products.data;
export const selectProductsLoading = (state: AppState) => state.products.isLoading;
export const selectProductsError = (state: AppState) => state.products.error;