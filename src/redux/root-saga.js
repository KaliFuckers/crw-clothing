// root-saga file helps us to avoid call saga.middleware for every saga
// and all help us to locate all saga in one array

import { all, call } from "redux-saga/effects";
import { fetchCollectionStart } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";
import { cartSagas } from "./cart/cart.sagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionStart), call(userSagas), call(cartSagas)]);
}

// We can perfectly do this but the main problem is it resolve the first and the past to the next, meanwhile the first call all of them at the same time an do things asyncronus
// export default function* rootSaga(){
//   yield fetchCollectionStart();
//   yield fetchCollectionStart();
// }
