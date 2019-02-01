import { SEARCH } from "./SearchButtonAction";
import { promotionData } from "../../../../domain/promotionData";

const initailState = {
  searchDisplay: [],
  promotionData: promotionData
};

export default function searchReducer(state = initailState, action) {
  switch (action.type) {
    case SEARCH: {
    //   const searchDisplay = state.promotionData.filter((val) => val.includes(searchTerm));

    //   const promotionArray = Object.keys(state.promotionData).map(
    //     key => state.promotionData[key]
    //   );
    //   const filteredPromotionArray = promotionArray.filter(
    //     el => el.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    //   );
    //   const searchDisplay = filteredPromotionArray.sort(
    //     (a, b) => b.lastUpdatedTime - a.lastUpdatedTime
    //   );

    //   return { ...state, searchTerm, searchDisplay };
    return action.payload;
    }
    default:
      return state;
  }
}

//   searchPromotions = () => {
//     // const searchInput = state.searchTerm;
//     const promotionArray = Object.keys(state.promotionData).map(key => state.promotionData[key]);
//     const filteredPromotionArray = promotionArray.filter((el) => el.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
//     this.setState({searchDisplay: filteredPromotionArray.sort((a,b) => b.lastUpdatedTime - a.lastUpdatedTime) });
//   }
