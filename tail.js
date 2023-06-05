const tail = function(theArray) {
  let result = [];
  if (theArray === undefined) {
    return;
  } else if (theArray.length <= 1) {
    return result;
  }
  for (let i = 1; i < theArray.length; i++) { // start at index 1
    result.push(theArray[i]);
  }
  return result;
};

module.exports = tail;