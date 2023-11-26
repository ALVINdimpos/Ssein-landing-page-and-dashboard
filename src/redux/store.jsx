import { configureStore } from '@reduxjs/toolkit';
import sidebarReducers from './reducers/sidebarReducers';
export const store = configureStore({
  reducer: {
    sidebar:sidebarReducers
  },
});