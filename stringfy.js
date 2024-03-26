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
  for (prop in object) {
    parseString +=
      Object.keys(object)[Object.keys(object).length - 1] === prop
        ? `${prop}=${object[prop]}`
        : `${prop}=${object[prop]}\n`;
  }
  return parseString
};
