import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { encryptTransform } from 'redux-persist-transform-encrypt';

import rootReducer from "./reducer/indexReducer";

const encrypt = encryptTransform({
  secretKey: 'my-super-secret-key',
  onError: function (error) {
    // Handle the error.
  },
})

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["profileReducer"],
  transforms: [encrypt],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configStore = () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};

export default configStore;
