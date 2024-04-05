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
  const replace = (value) => value.replaceAll(" ", "$S");
  let parseString = "";
  const objectReplace = new Object();
  for (prop in object) {
    const value = object[prop];
    if (value.forEach) {
      objectReplace[prop] = new Array();
      value.forEach((value, i) => {
        objectReplace[prop][i] = replace(value).replaceAll(",", "$C");
      });
    } else if (typeof value === "string" || typeof value === "number") {
      objectReplace[prop] = replace(String(value));
    } else if (typeof value === "boolean") {
      objectReplace[prop] = value;
    } else {
      throw new Error(`This type is not supported. [in ${prop}]`);
    }
  }
  const objectKeys = Object.keys(objectReplace);

  for (prop in objectReplace) {
    const ifLastProp = objectKeys[objectKeys.length - 1] === prop;
    const value = objectReplace[prop];
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
      const line =
        typeof value === "boolean" ? `!${prop}=${value}` : `${prop}=${value}`;
      parseString += ifLastProp ? line : line + "\n";
    }
  }
  return parseString;
};
