// Refactor following solution
// Count words in a string

const countWords = function (string) {
  let wordCount = 0;
  let inWord = false;
  for (const char of string) {
    if (!inWord) {
      if (char === ' ') {
        inWord = false;
      } else {
        inWord = true;
        wordCount++;
      }
    } else {
        if (char === ' ') {
          inWord = false;
        } else {
          inWord = true;
        }
    }
  }
  return wordCount;
};

module.exports = countWords;
