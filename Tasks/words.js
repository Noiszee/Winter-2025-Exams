// Refactor following solution
// Count words in a string


/*
During refactoring, this problem reminded me of one I once saw in C#,
where I thought about using .Split and decided to use it here,
but its readability and variety leave much to be desired.
 */
const countWords = (string) => string.split(' ').filter(word => word !== '').length;

module.exports = countWords;
