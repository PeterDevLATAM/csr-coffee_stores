export const selectCoffeeStoresReducer = (state) => {
  console.log({ state });
  return state.coffeeStores.data;
};
