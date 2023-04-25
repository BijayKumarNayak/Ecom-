import { configureStore } from "@reduxjs/toolkit";
import rootreducer from ".././reducer/Rootreducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from ".././rootsaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootreducer,
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;