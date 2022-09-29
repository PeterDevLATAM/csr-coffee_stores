import { COFFEE_STORES_ACTION_TYPES } from "./coffee_stores.types";

export const COFFEE_STORES_INITIAL_STATE = {
  data: {},
};

export const coffeeStoresReducer = (
  state = COFFEE_STORES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case COFFEE_STORES_ACTION_TYPES.SET_COFFEE_STORES:
      return { ...state, data: payload };
    default:
      return state;
  }
};
