const middle = function(arr) {
  let result = [];
  if (arr === undefined || arr.length === 0) {
    return false;
  }
  let _isEvenLength = arr.length % 2 === 0;
  let _middleIndex = [];
  
  if (_isEvenLength) {
    _middleIndex.push((arr.length / 2) - 1);
    _middleIndex.push(arr.length / 2);
  } else {
    _middleIndex.push(Math.floor(arr.length / 2));
  }
  for (let index of _middleIndex) {
    result.push(arr[index]);
  }
  return result;
};

module.exports = middle;