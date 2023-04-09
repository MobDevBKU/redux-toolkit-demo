import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./authentication/slice";
import runningList from "./features/runningList/slice";

const rootReducer = combineReducers({
  runningList,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
