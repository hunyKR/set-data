/**
 * Converts set-data string into an object
 * @param {string} text a valid set-data string
 * @returns {object} Converted result
 * @example
 * const setData = require('set-data')
 * setData.parse(`
 *  KEY = VALUE
 * `)
 */
module.exports = (text) => {
  const sdObject = new Object();
  text.split("\n").forEach((line) => {
    const lineReplace = line
      .replaceAll("\r", "")
      .replaceAll(" ", "")
      .replaceAll("$S", " ");
    if (
      lineReplace.split("")[0] === "#"
        ? false
        : true && line === "\r"
        ? false
        : true && line
    ) {
      const set = lineReplace.split("=");
      sdObject[set[0]] = set[1];
    }
  });
  return sdObject;
};