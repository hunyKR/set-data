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
    const comment = lineReplace.split("")[0] === "#";
    const escape = line === "\r";
    if (!comment && !escape && line) {
      const set = lineReplace.split("=");
      const array = lineReplace.split("")[0] === "&";
      if (array) {
        const arrayContent = set[1].split(",");
        arrayContent.forEach((value, i) => {
          arrayContent[i] = value.replaceAll("$C", ",");
        });
        const arrayName = set[0].replace("&", "");
        sdObject[arrayName] = new Array();
        arrayContent.forEach((value) => {
          sdObject[arrayName].push(value);
        });
      } else {
        sdObject[set[0]] = set[1].replaceAll("$E", "=");
      }
    }
  });
  return sdObject;
};
