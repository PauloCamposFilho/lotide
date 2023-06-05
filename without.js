const without = function(originalArray, expurgeArray) {
  let result = [];
  for (let original of originalArray) {
    let toAdd = true;
    for (let expurge of expurgeArray) {
      if (expurge === original) {
        toAdd = false;
        break;
      }
    }
    if (toAdd) result.push(original);
  }
  return result;
};

module.exports = without;