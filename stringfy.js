/**
 * Converts object into a set-data string
 * @param {object} object
 * @returns {string} Converted result
 * @example
 * const setData = require('set-data')
 * setData.stringfy({
 *  key: 'value'
 * })
 */
module.exports = (object) => {
  let parseString = "";
  const objectKeys = Object.keys(object);
  for (prop in object) {
    const ifLastProp = objectKeys[objectKeys.length - 1] === prop;
    const value = object[prop];
    if (typeof value === "object") {
      let arrayString = `&${prop}=`;
      value.forEach((value, i) => {
        if (i === 0) {
          arrayString += value;
        } else {
          arrayString += "," + value;
        }
      });
      parseString += ifLastProp ? arrayString : arrayString + "\n";
    } else {
      const line = `${prop}=${value}`;
      parseString += ifLastProp ? line : line + "\n";
    }
  }
  return parseString;
};
