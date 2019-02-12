export const getTruthyList = list => {
  let listArray = Array.from(list.entries());
  let truthyList = listArray.filter(item => item[1] === true);
  return truthyList.join(",");
};

export const arrayToMap = array => {
  //TODO : Refactor this to use a normal object
  let newMap = new Map();

  if (array && array.length) {
    array.forEach(element => {
      newMap.set(element, true);
    });
  }

  return newMap;
};

export const search = (searchInput, itemArray = []) => {
  return itemArray.filter(
    item => item.name.toLowerCase().indexOf(searchInput.toLowerCase()) > -1
  );
};

export const sort = itemArray => {
  return itemArray.sort((a, b) => b.lastUpdatedTime - a.lastUpdatedTime);
};

export const mapToArray = itemMap => {
  return Object.keys(itemMap).map(key => itemMap[key]);
};
