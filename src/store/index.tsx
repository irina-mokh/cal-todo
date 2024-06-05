import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mainReducer from './reducer';

const persistedState = () => {
  let state;
  const value = localStorage.getItem('reduxState');
  if (typeof value === 'string') {
    state = JSON.parse(value);
  } else {
    state = {};
  }
  return state;
};
const rootReducer = combineReducers({
  main: mainReducer,
});

export const store = configureStore({
  preloadedState: persistedState(),
  reducer: rootReducer
});

store.subscribe(() => {
  // console.log('persist:', store.getState());
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
