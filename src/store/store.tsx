import { configureStore,createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

const basketSlice = createSlice({
    name: 'basket',
    initialState: initialState,
    reducers: {
        addProduct: (state, action) => {
            return state.map((item:any) => {
                if (item.id !== action.payload.id) {
                    console.log('action.payload.id',action.payload.id)
                    console.log('item.id',item.id)
                    return item;
                }

                return {
                    ...item,
                    added: true,
                };
            });
        },
        removeProduct: (state, action) => {
            return state.map((item:any) => {
                if (item.id !== action.payload.id) {
                    return item;
                }

                return {
                    ...item,
                    added: false,
                };
            });
        },
    },
});

const store = configureStore({ reducer: basketSlice.reducer });

export const { addProduct, removeProduct } = basketSlice.actions;

export { basketSlice, store };
