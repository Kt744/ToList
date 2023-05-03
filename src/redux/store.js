import { configureStore } from "@reduxjs/toolkit";

import todolistReducer from './todolistSlice';

let store = configureStore({ reducer: { todo: todolistReducer } });

export default store;