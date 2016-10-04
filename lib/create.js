/**
 * Create driver instance
 * @function create
 * @param {...*} args
 * @returns {SqliteDriver}
 */
'use strict'

const SqliteDriver = require('./sqlite_driver')

/** @lends create */
function create (...args) {
  return new SqliteDriver(...args)
}

module.exports = create
