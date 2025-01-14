// Refactor following solution
// Reverse dict, exchange keys and values

const reversedDict = (data) =>
  {
    const keys = Object.keys(data);
    const reversedData = { ...data };
    keys.forEach((key) => {
      const value = reversedData[key];
      reversedData[value] = key;
      delete reversedData[key];
    });
    return reversedreversedData;
  };

module.exports = reversedDict;
