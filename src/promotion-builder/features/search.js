
export const searchAndSortPromotions = (searchInput, promotionData) => {
  const promotionArray = Object.keys(promotionData).map(key => promotionData[key]);
  const filteredPromotionArray = search(searchInput, promotionArray);
  return filteredPromotionArray.sort((a, b) => b.lastUpdatedTime - a.lastUpdatedTime);
};

export const search = (searchInput, itemArray = []) => {
  return itemArray.filter(
    item => item.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1
  );
};

