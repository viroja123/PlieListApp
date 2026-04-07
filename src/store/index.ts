import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE, Storage } from 'redux-persist';
import { MMKV } from 'react-native-mmkv';

export const mmkv = new MMKV({
  id: 'secure-storage',
  encryptionKey: 'hunter2',
});

import authReducer from './auth/index';
import eventReducer from './event/index';
import favoritesReducer from './favourite/index';

const reducers = combineReducers({
  auth: authReducer,
  events: eventReducer,
  favorites: favoritesReducer,
});


export const reduxStorage: Storage = {
  setItem: (key: string, value: string) => {
    mmkv.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key: string) => {
    const value = mmkv.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key: string) => {
    mmkv.delete(key);
    return Promise.resolve();
  },
};

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['auth', 'events', 'favorites'],
};

const rootReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
