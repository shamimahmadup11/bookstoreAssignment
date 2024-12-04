import { createSlice } from "@reduxjs/toolkit";
import data from "./data";

const initialState = {
  value: data
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.value = action.payload; 
    },
  },
});

export const { updateData } = dataSlice.actions;

export default dataSlice.reducer;
