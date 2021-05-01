import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root.reducer";
import { persistStore } from "redux-persist";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";

// const middlewares = [thunk];
const sagaMiddelware = createSagaMiddleware();
const middlewares = [sagaMiddelware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddelware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
