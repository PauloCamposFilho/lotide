const letterPositions = function(sentence) {
  const results = {};
  const newStr = sentence.toLowerCase();
  // logic to update results here
  for (let i in newStr) {
    let _letter = newStr[i];
    if (results[_letter]) {
      results[_letter].push(i);
      continue;
    }
    results[_letter] = [i];
  }
  return results;
};

module.exports = letterPositions;