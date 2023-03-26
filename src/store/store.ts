import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// Reducers
import { rootReducer } from './root-reducer';
// Sagas
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      immutableCheck: true,
      serializableCheck: true,
    }),
    sagaMiddleware,
    ...middlewares,
  ],
});

// Run Saga
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
