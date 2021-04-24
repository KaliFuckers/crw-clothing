import { cartActionType } from "./cart.types";
import { addItem } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  items: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  console.log(state.items);
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
    default:
      return state;
  }
};

export default cartReducer;
