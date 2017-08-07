import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate, storages } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const middleware = [thunkMiddleware];
  return new Promise((resolve, reject) => {
    try {
      const store = createStore(
      rootReducer,
      undefined,
      composeEnhancers(
        autoRehydrate(),
        applyMiddleware(...middleware),
        ),
      );

      persistStore(
        store,
        { storage: storages.localStorage },
        () => resolve(store),
      );
    } catch (e) {
      reject(e);
    }
  });
}

