

import { phonebookReducer } from "./phonebookReducer";
import { configureStore } from "@reduxjs/toolkit";



export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer
},
});