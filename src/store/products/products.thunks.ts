import axios from "axios";
import { productsSlice, productType, } from "./products.slice";

import { AppThunk } from "../store";
import { isAxiosError } from "../../types/typeGuards";

type productsResponseType = {
    products: productType[];
    total: number;
    skip: number;
    limit: number;
}

export const getProducts = (): AppThunk => async dispatch => {
    try {
        dispatch(productsSlice.actions.productsFetchingStart);
        const response = await axios.get<productsResponseType>('https://dummyjson.com/products');
        // show spinner for demonstration only
        await new Promise(resolve => setTimeout(resolve, 1000));
        dispatch(productsSlice.actions.productsFetchingSuccess(response.data.products));
    } catch (error) {
        console.log('error', error);
        let message ='Sorry, error occurred. ';
        if (isAxiosError(error)) {
            message += error.message;
        }
        dispatch(productsSlice.actions.productsFetchingFailed(message));
        
    }
}