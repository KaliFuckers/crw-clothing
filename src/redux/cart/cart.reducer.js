import { cartActionType } from "./cart.types";
import {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
} from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  items: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionType.TOOGLE_SHOW:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionType.ADD_ITEM:
      return {
        ...state,
        items: addItem({ items: state.items, payload: action.payload }),
      };
    case cartActionType.DELETE_ITEM:
      return {
        ...state,
        items: deleteItem({ items: state.items, id: action.payload }),
      };
    case cartActionType.INCREASE_QUANTITY:
      return {
        ...state,
        items: increaseQuantity({
          items: state.items,
          payload: action.payload,
        }),
      };
    case cartActionType.DECREASE_QUANTITY:
      console.log(
        "TEST",
        decreaseQuantity({
          items: state.items,
          payload: action.payload,
        })
      );
      return {
        ...state,
        items: decreaseQuantity({
          items: state.items,
          payload: action.payload,
        }),
      };
    default:
      return state;
  }
};

export default cartReducer;
