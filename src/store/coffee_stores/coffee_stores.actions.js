import { COFFEE_STORES_ACTION_TYPES } from "./coffee_stores.types";
import { createAction } from "../../lib/reducer.utils";

export const setCoffeeStores = (coffeeStores) => {
  return createAction(
    COFFEE_STORES_ACTION_TYPES.SET_COFFEE_STORES,
    coffeeStores
  );
};
