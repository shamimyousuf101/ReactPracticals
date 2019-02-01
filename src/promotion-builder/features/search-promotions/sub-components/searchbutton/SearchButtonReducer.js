import { SEARCH_BUTTON_CLICK } from "./SearchButtonAction";
import { promotionData } from "../../../../../domain/promotionData";

const initailState = [];

export default function searchButtonReducer(state = initailState, action) {
  switch (action.type) {
    case SEARCH_BUTTON_CLICK: {
      const { searchTerm }= action.payload.searchTerm;
      let {searchDisplay } = action.payload.searchDisplay;
 
      console.log(searchTerm)

      const promotionArray = Object.keys(promotionData).map(
        key => promotionData[key]
      );

      
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

