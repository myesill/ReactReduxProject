import { configureStore } from "@reduxjs/toolkit";
import dataSice from "./dataSice";
import modalSlice from "./modalSlice";

export const store = configureStore({
  reducer: {
    data: dataSice,
    modal: modalSlice,
  },
});
