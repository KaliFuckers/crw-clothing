import UserActionsTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionsTypes.SIGN_SUCCESS:
      // case UserActionsTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    // case UserActionsTypes.EMAIL_SIGN_IN_FAILURE:
    case UserActionsTypes.SIGN_FAILURE:
    case UserActionsTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UserActionsTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;
