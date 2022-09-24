import { configureStore } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { Action } from 'redux';

import productsReducer from './products/products.slice';

export const store = configureStore({ 
        reducer: {
            products: productsReducer
        }
    });

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 

export type ThunkAction<
    R, // Return type of the thunk function
    S, // state type used by getState
    E, // any "extra argument" injected into the thunk
    A extends Action // known types of actions that can be dispatched
> = (dispatch: AppDispatch, getState: () => S, extraArgument: E) => R

export type AppThunk<ReturnType = Promise<void>> = ThunkAction<
    ReturnType, 
    AppState,
    unknown,
    AnyAction
>