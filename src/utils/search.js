import { mapToArray, search, sort, searchById } from "./utils";

export const searchPromotions = (searchInput, promotionData) => {
  const promotionArray = mapToArray(promotionData);
  const filteredPromotionArray = search(searchInput, promotionArray);
  return sort(filteredPromotionArray);
};


export const searchPromotionsById = (searchInput, promotionData) => {
  const promotionArray = mapToArray(promotionData);
  const filteredPromotionArray = searchById(searchInput, promotionArray);
  return sort(filteredPromotionArray);
};