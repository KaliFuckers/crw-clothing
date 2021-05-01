import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

const selectCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectorCollections = createSelector(
  [selectCollection],
  (collections) => {
    return collections;
  }
);

export const selectorCollection = (collectionUrlParam) =>
  createSelector([selectorCollections], (collections) => {
    return collections.find(
      (collection) => collection.title.toLowerCase() === collectionUrlParam
    );
  });

export const selectorCollectionsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectorCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
