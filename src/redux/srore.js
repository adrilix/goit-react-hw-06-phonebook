
import { combineReducers, createStore } from "redux";
import { phonebookReducer } from "./phonebookReducer";
import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from "./reducer";


const enhancer = devToolsEnhancer();


const rootReducer = combineReducers({
        phonebook: phonebookReducer
  });
export const store = createStore( rootReducer, enhancer);