/**
 * Converts object into a set-data file
 * @param {string} fileName 
 * @param {object} object 
 * @example
 * const setData = require('set-data')
 * setData.stringfyFile('./setting.sd', {
 *  key: 'value'
 * })
 */
module.exports = (fileName, object) => {
  const stringfy = require("./stringfy.js");
  const fs = require("fs");
  fs.writeFileSync(fileName, stringfy(object));
};