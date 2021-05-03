import UserActionsTypes from "./user.types";

export const googleSignInStart = () => ({
  type: UserActionsTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignUpStart = ({ email, password, displayName }) => ({
  type: UserActionsTypes.EMAIL_SIGN_UP_START,
  payload: {
    email,
    password,
    displayName,
  },
});

export const checkUserSession = () => ({
  type: UserActionsTypes.CHECK_USER_SESSION,
});

export const emailSignInStart = ({ email, password }) => ({
  type: UserActionsTypes.EMAIL_SIGN_IN_START,
  payload: {
    email,
    password,
  },
});

export const signSuccess = (user) => ({
  type: UserActionsTypes.SIGN_SUCCESS,
  payload: user,
});

export const signOutSuccess = () => ({
  type: UserActionsTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: UserActionsTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const signFailure = (error) => ({
  type: UserActionsTypes.SIGN_FAILURE,
  payload: error,
});

export const signOut = () => ({
  type: UserActionsTypes.SIGN_OUT_START,
});
