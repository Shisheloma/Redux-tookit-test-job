import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchStateType } from "../../types/fetchingTypes";

export type productType = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: Array<string>
}

const initialState: FetchStateType<productType[]> = {
    data: [],
    isLoading: true,
    error: '',
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        productsFetchingStart(state) {
            state.isLoading = true;
        },
        productsFetchingSuccess(state, action: PayloadAction<productType[]>) {
            state.isLoading = false;
            state.data = action.payload;
        },
        productsFetchingFailed(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

export default productsSlice.reducer