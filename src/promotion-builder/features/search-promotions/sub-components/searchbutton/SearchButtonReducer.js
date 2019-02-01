import { SEARCH_BUTTON_CLICK } from "./SearchButtonAction";
import { promotionData } from "../../../../../domain/promotionData";

const initailState = {
  searchTerm: "",
  searchDisplay: [],
  promotionData: promotionData
};

export default function searchButtonReducer(state = initailState, action) {
  switch (action.type) {
    case SEARCH_BUTTON_CLICK: {
      const { searchTerm }= action.payload.searchTerm;
      const {searchDisplay } = action.payload.searchDisplay;
 
      const promotionArray = Object.keys(state.promotionData).map(
        key => state.promotionData[key]
      );

      console.log(promotionArray, searchTerm)
      const filteredPromotionArray = promotionArray.filter(
        el => el.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
      );
      
      searchDisplay = filteredPromotionArray.sort(
        (a, b) => b.lastUpdatedTime - a.lastUpdatedTime
      );

      return searchDisplay
    }
    default:
      return state;
  }
}

