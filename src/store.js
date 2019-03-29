import { createStore, combineReducers } from "redux";
import { viewReducer } from "./reducers/view-reducer";
import { selectedPromotionIdReducer } from "./reducers/selectedPromotionId-reducer";
import { searchTermReducer } from "./reducers/searchTerm-reducer";
import { promotionDataReducer } from "./reducers/promotionData-reducer";
import {overlayReducer} from "./reducers/overlay-reducer";

export const rootReducer = combineReducers({
  view: viewReducer,
  selectedPromotionId: selectedPromotionIdReducer,
  searchTerm: searchTermReducer,
  promotionData: promotionDataReducer,
  overlay: overlayReducer
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
