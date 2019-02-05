import { SEARCH_PROMOTIONS } from '../actions/search_actions';
import { promotionData } from "../../../../domain/promotionData";

const initailState = [];

export default function searchPromotionsReducer(state = initailState, action) {

  switch (action.type) {
    case SEARCH_PROMOTIONS: {

      let searchTerm = action.payload;
      let searchDisplay = state;

      const promotionArray = Object.keys(promotionData).map(
        key => promotionData[key]
      );

      
      const filteredPromotionArray = promotionArray.filter(
        el => el.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
      );
      
      searchDisplay = filteredPromotionArray.sort(
        (a, b) => b.lastUpdatedTime - a.lastUpdatedTime
      );

      return searchDisplay ;
    }
    default:
      return state;
  }
}

