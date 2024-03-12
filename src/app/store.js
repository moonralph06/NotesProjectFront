import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: buildGetDefaultMiddleware => buildGetDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
