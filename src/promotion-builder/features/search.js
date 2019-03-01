
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

export const sort = itemArray => {
  return itemArray.sort((a, b) => b.lastUpdatedTime - a.lastUpdatedTime);
};

export const mapToArray = itemMap => {
  return Object.keys(itemMap).map(key => itemMap[key]);
};
