// Refactor following solution
// Reverse dict, exchange keys and values

const reversedDict = (inputData) =>
  {
    const reversedData = { ...inputData };

    for (const key of Object.keys(inputData))
      {
        const value = inputData[key];
        reversedData[value] = key;
      };

    return reversedData;
  };

module.exports = reversedDict;
