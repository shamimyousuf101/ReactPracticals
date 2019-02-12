import { mapToArray, search, sort } from "./utils";

export const searchPromotions = (searchInput, promotionData) => {
  const promotionArray = mapToArray(promotionData);
  const filteredPromotionArray = search(searchInput, promotionArray);
  return sort(filteredPromotionArray);
};
