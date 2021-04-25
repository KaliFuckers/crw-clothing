import { cartActionType } from "./cart.types";

export const toogleShowCart = () => ({
  type: cartActionType.TOOGLE_SHOW,
});

export const addItem = item => ({
  type: cartActionType.ADD_ITEM,
  payload: item
});

export const deleteItem = id => ({
  type: cartActionType.DELETE_ITEM,
  payload: id
});

export const increaseQuantity = id => ({
  type: cartActionType.INCREASE_QUANTITY,
  payload: id
});

export const decreaseQuantity = id => ({
  type: cartActionType.DECREASE_QUANTITY,
  payload: id
});
