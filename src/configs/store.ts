import { produitApi } from "@/modules/produits/api";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { combineReducers } from "redux";

export const store = configureStore({
    reducer: combineReducers({
        [produitApi.reducerPath]:produitApi.reducer 
    }), 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: true, immutableCheck: false, serializableCheck: false})
    .concat(
        produitApi.middleware
    )
})
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;