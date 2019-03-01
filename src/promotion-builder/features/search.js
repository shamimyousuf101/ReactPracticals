
export const searchPromotions = (searchInput, promotionData) => {
  const promotionArray = Object.keys(promotionData).map(key => promotionData[key]);
  const filteredPromotionArray = search(searchInput, promotionArray);
  return filteredPromotionArray.sort((a, b) => b.lastUpdatedTime - a.lastUpdatedTime);
};


export const searchPromotionsById = (searchInput, promotionData) => {
  const promotionArray = Object.keys(promotionData).map(key => promotionData[key]);
  const filteredPromotionArray = searchById(searchInput, promotionArray);
  return filteredPromotionArray.sort((a, b) => b.lastUpdatedTime - a.lastUpdatedTime);
};

export const search = (searchInput, itemArray = []) => {
  return itemArray.filter(
    item => item.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1
  );
};

export const searchById = (searchInput, itemArray = []) => {
  return itemArray.filter(
    item => item.id.toLowerCase().indexOf(searchInput.toLowerCase()) > -1
  );
};
