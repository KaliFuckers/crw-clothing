import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectorCartItems = createSelector(
  [selectCart],
  (cart) => cart.items
);

export const selectCartItemsCount = createSelector(
  [selectorCartItems],
  (itemsCount) => itemsCount.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectorHideCartComponent = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectorCartTotal = createSelector([selectorCartItems], (total) =>
  total.reduce((acc, item) => acc + item.price * item.quantity, 0)
);


