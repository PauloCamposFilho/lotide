const head = function(theArray) {
  if (theArray === undefined) {
    return;
  } else if (theArray.length === 0) {
    return;
  }
  return theArray[0];
};

module.exports = head;