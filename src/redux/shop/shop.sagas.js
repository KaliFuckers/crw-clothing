import { takeLatest, call, put } from "redux-saga/effects";
// takeEvery listen all the specific actions that we pass to it and launch every time we call it
// takeLatest is like takeEvery but call the lates one call
//put is a saga effect to create saga action, is like dispatch but we have to yield it
// call is the effect inside of our generator function that invoques the method
//
import { ShopActionsType } from "./shop.types";
import FirebaseServices from "../../services/firebase.services";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

function* fetchCollectionsAsync() {
  const collectionsRef = FirebaseServices.firestore.collection("collections");
  // dispatch(fetchCollectionsStart());
  try {
    const snapshot = yield collectionsRef.get();
    const collectionsMap = yield call(
      FirebaseServices.convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  // yield takeEvery(
  //   ShopActionsType.FETCH_COLLECTION_START,
  //   fetchCollectionsAsync
  // );
  yield takeLatest(
    ShopActionsType.FETCH_COLLECTION_START,
    fetchCollectionsAsync
  );
}
