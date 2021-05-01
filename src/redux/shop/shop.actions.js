import { ShopActionsType } from "./shop.types";

export const fetchCollectionsStart = () => ({
  type: ShopActionsType.FETCH_COLLECTION_START,
});

export const fetchCollectionsSuccess = (collections) => ({
  type: ShopActionsType.FETCH_COLLECTION_SUCCESS,
  payload: collections,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionsType.FETCH_COLLECTION_FAILURE,
  payload: errorMessage,
});

// Redux-thunk
// export const fetchCollectionsStartAsync = () => {
//   return (dispatch) => {
//     const collectionsRef = FirebaseServices.firestore.collection("collections");
//     dispatch(fetchCollectionsStart());
//     collectionsRef
//       .get()
//       .then((snapshot) => {
//         const collections = FirebaseServices.convertCollectionsSnapshotToMap(
//           snapshot
//         );
//         dispatch(fetchCollectionsSuccess(collections));
//       })
//       .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
//   };
// };
