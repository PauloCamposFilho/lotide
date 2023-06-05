// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  //console.log(allItems);
  //console.log(itemsToCount);
  let result = {};
  for (let item of allItems) {
    //console.log(item, "exists?", itemsToCount[item] == true);
    if (itemsToCount[item]) {
      if (result[item]) {
        result[item] ++;
        continue;
      }
      result[item] = 1;
    }
  }
  console.log(result);
  return result;
};

module.exports = countOnly;