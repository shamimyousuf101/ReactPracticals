import { createStore, combineReducers } from "redux";
import { getSubHeading } from "../src/promotion-builder/common/banner/reducer";

export const rootReducer = combineReducers({
  view: getSubHeading
});

export const store = createStore(rootReducer);
