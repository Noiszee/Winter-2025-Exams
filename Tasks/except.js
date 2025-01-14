// Refactor following solution
// Copy all values from dict except listed

const exceptKeys = (inputValue, ...excludekeys) =>
  {
    const copy = {...inputValue};
    const keys = Object.keys(inputValues);
    keys.forEach((key) =>
      {
        if (inputValue.includes(key))
          {
            delete copy[key];       
          }

      });
    return copy;
  };

module.exports = EXCEPT;
