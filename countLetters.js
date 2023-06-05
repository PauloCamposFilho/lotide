const countLetters = function(str) {
  let result = {};
  let newStr = str.toLowerCase();
  for (let letter of newStr) {
    if (result[letter]) {
      result[letter] ++;
      continue;
    }
    result[letter] = 1;
  }
  return result;
};

module.exports = countLetters;