import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./Slice"; // Import the reducer

// Configure the store
export const store = configureStore({
  reducer: {
    data: dataReducer, // Use the `data` key to access the state
  },
});
