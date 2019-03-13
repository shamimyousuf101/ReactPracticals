import { createStore, combineReducers } from "redux";
import { handleView } from "./reducers/view-reducer";
import { handlePromoId } from "./reducers/selectedPromotionId-reducer";

export const rootReducer = combineReducers({
  view: handleView,
  selectedPromotionId: handlePromoId
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
