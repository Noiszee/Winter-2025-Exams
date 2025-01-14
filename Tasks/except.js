// Refactor following solution
// Copy all values from dict except listed

const exceptKeys = (inputValue, ...excludekeys) =>
  {
    const keys = Object.keys(inputValues);
    keys.forEach((key) =>
      {
        if (inputValue.includes(key))
          {
            delete inputValue[key];       
          }

      });
    return inputValue;
  };

module.exports = EXCEPT;
