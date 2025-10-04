import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import CartReducer from "./cart";
import {persistStore, persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import AuthReducer from "@/features/auth/authSlice";



  const persistConfig={
    key:"root",
    storage,
    whitelist:["cart"]
  }

  const rootReducer=combineReducers({
    cart:CartReducer,
    auth:AuthReducer
  })

  const persistedReducer=persistReducer(persistConfig,rootReducer)


export const store=configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor=persistStore(store);
export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;