import { combineReducers } from "redux";

import wow from "./wow.reducers";

export const rootReducer = combineReducers({
  teamMembers: wow
});