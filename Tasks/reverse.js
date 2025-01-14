// Refactor following solution
// Reverse dict, exchange keys and values

const reversedDict = (data) =>
  {
    const reversedData = { ...data };

    for (const key of Object.keys(data))
      {
        const value = reversedData[key];
        reversedData[value] = key;
      };

    return reversedData;
  };

module.exports = reversedDict;
