import { cartActionType } from "./cart.types";

export const toogleShowCart = () => ({
  type: cartActionType.TOOGLE_SHOW,
});

export const addItem = item => ({
  type: cartActionType.ADD_ITEM,
  payload: item
});

export default toogleShowCart;