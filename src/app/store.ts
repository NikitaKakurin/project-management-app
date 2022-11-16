import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import langReducer from './slices/langSlice';
import userReducer from './slices/userSlice';
const rootReducer = combineReducers({
  authReducer,
  langReducer,
  userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['auth/loginSuccess', 'auth/logout'],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
