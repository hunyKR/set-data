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
      const key = set[0];
      set.splice(0, 1);
      const value = set.join("=");

      const array = lineReplace.split("")[0] === "&";
      const bool = lineReplace.split("")[0] === "!";

      if (array) {
        const arrayContent = value.split(",");
        arrayContent.forEach((value, i) => {
          arrayContent[i] = value.replaceAll("$C", ",");
        });
        const arrayName = key.replace("&", "");
        sdObject[arrayName] = new Array();
        arrayContent.forEach((value) => {
          sdObject[arrayName].push(value);
        });
      } else if (bool) {
        const boolName = key.replace("!", "");
        sdObject[boolName] =
          value === "true"
            ? true
            : value === "false"
            ? false
            : (() => {
                throw new Error(`The boolean key must be either true or false. [in ${boolName}]`);
              })();
      } else {
        sdObject[key] = value;
      }
    }
  });
  return sdObject;
};
