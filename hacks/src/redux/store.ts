import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./userInfoSlice";
import seatReducer from "./seatSlice";

const persistConfig = {
  // ストアのキー
  key: "root",
  // 使用するストレージ（localStorage）
  storage,
};
const persistedUserReducer = persistReducer(persistConfig, userReducer);

const seatConfig = {
  key: "seat",
  storage,
};
const seatedUserReducer = persistReducer(seatConfig, seatReducer);

export const store = configureStore({
  reducer: {
    // 永続化されたリデューサーを使用
    loginState: persistedUserReducer,
    seatState: seatedUserReducer,
  },
});

// persistorをエクスポート
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
