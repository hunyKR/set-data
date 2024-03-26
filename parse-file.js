/**
 * Converts set-data file into an object
 * @param {string} fileName Path to the file you want to parse
 * @param {string | null | undefined} fileEncoding Encoding the file you want to parse
 * @returns {object} Converted result
 * @example
 * const setData = require('set-data')
 * setData.parseFile('./setting.sd', 'utf-8')
 * setData.parseFile('./setting.sd') // You can omission fileEncoding
 */
module.exports = (fileName, fileEncoding) => {
  const parse = require('./parse.js')
  const fs = require("fs");
  const sd = fs.readFileSync(fileName, fileEncoding ? fileEncoding : "utf-8");
  return parse(sd)
};