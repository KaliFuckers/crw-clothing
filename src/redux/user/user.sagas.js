import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionsTypes from "./user.types";
import FirebaseServices from "../../services/firebase.services";
import {
  signFailure,
  signSuccess,
  signOutSuccess,
  signOutFailure,
} from "../user/user.actions";

function* googleSignIn() {
  try {
    const { user } = yield FirebaseServices.auth.signInWithPopup(
      FirebaseServices.googleProvider
    );
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signFailure(error));
  }
}

function* getSnapshotFromUserAuth(userAuth, additionalData) {
  const userRef = yield call(
    FirebaseServices.createUserProfileDocument,
    userAuth,
    additionalData
  );
  if (!userRef) return;
  const userSnapshot = yield userRef.get();
  yield put(signSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
}

function* emailSignUpAndPassword({
  payload: { email, password, displayName },
}) {
  try {
    console.log("display", displayName);
    const { user } = yield FirebaseServices.auth.createUserWithEmailAndPassword(
      email,
      password
    );

    yield getSnapshotFromUserAuth(user, {displayName});
  } catch (error) {
    console.log(error);
    yield put(signFailure(error));
  }
}

function* emailSignInAndPassword({ payload: { email, password } }) {
  try {
    const { user } = yield FirebaseServices.auth.signInWithEmailAndPassword(
      email,
      password
    );
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signFailure(error));
  }
}

function* checkUserSession() {
  try {
    const user = yield FirebaseServices.getCurrentUser();
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signFailure(error));
  }
}

function* signOutAsync() {
  try {
    yield FirebaseServices.auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure());
  }
}

export function* onGoogleUserStart() {
  yield takeLatest(UserActionsTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

export function* onCreateEmailAndPasswordStart() {
  yield takeLatest(
    UserActionsTypes.EMAIL_SIGN_UP_START,
    emailSignUpAndPassword
  );
}

export function* onSignInWithEmailAndPassword() {
  yield takeLatest(
    UserActionsTypes.EMAIL_SIGN_IN_START,
    emailSignInAndPassword
  );
}

export function* oncheckUserSession() {
  yield takeLatest(UserActionsTypes.CHECK_USER_SESSION, checkUserSession);
}

export function* signOut() {
  yield takeLatest(UserActionsTypes.SIGN_OUT_START, signOutAsync);
}

export function* userSagas() {
  yield all([
    call(onGoogleUserStart),
    call(onCreateEmailAndPasswordStart),
    call(onSignInWithEmailAndPassword),
    call(oncheckUserSession),
    call(signOut),
  ]);
}
