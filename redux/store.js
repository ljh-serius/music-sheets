import rootReducer from "./reducers/index";
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () => configureStore({
  reducer: rootReducer,
});

export const wrapper = createWrapper(makeStore);