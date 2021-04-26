import { createSelector } from "reselect";

const selectShop = (state) => {
  return state.shop;
};

export const selectorCollections = createSelector([selectShop], (shop) => {
  return Object.values(shop.collections);
});

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectShop],
    (collections) => collections.collections[collectionUrlParam]
  );
