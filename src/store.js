import { createStore, combineReducers } from "redux";
import { handleView } from "./reducers/view-reducer";
import { handlePromoId } from "./reducers/selectedPromotionId-reducer";
import { handleSearchTerm } from "./reducers/searchTerm-reducer";
import { handlePromotionData } from "./reducers/promotionData-reducer";

export const rootReducer = combineReducers({
  view: handleView,
  selectedPromotionId: handlePromoId,
  searchTerm: handleSearchTerm,
  promotionData: handlePromotionData
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
