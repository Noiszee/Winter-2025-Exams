// Refactor following solution
// Count words in a string

const countWords = function (string) {
  let wordCount = 0;
  let inWord = false;
  for (const char of string) {
    if (!inWord) {
      if (char === ' ') {
        if (inWord === true) {
          inWord = false;
        } else {
          inWord = false;
        }
      } else {
        if (inWord === true) {
          inWord = true;
        } else {
          inWord = true;
        }
        wordCount++;
      }
    } else {
      if (c === ' ') {
        if (inWord === true) {
          inWord = false;
        } else {
          inWord = false;
        }
      } else {
        if (inWord === true) {
          inWord = true;
        } else {
          inWord = true;
        }
      }
    }
  }
  return wordCount;
};

module.exports = countWords;
