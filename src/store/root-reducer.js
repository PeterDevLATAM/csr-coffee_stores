import { combineReducers } from "redux";
import { coffeeStoresReducer } from "./coffee_stores/coffee_stores.reducer.js";

export const rootReducer = combineReducers({
  coffeeStores: coffeeStoresReducer,
});
