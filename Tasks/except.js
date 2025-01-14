// Refactor following solution
// Copy all values from dict except listed

const exceptKeys = (inputValue, ...excludeKeys) =>
  {
    const copy = {...inputValue};
    const keys = Object.keys(copy);

    for (const key of keys)
      {
        if (excludeKeys.includes(key))
          {
            delete copy[key];       
          }

      };
    return copy;
  };

module.exports = exceptKeys;
