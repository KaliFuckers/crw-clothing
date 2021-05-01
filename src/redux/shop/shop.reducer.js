import { ShopActionsType } from "./shop.types";
const INITIAL_STATE = {
  collections: [],
  isFetching: false,
  errorMessage: ''
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionsType.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true
      }
    case ShopActionsType.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      }
    case ShopActionsType.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state;
  }
};

export default shopReducer;
