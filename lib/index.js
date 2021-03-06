/**
 * Clay driver for sqlite
 * @module clay-driver-sqlite
 * @version 6.3.24
 */

'use strict'

const create = require('./create')
const SqliteDriver = require('./sqlite_driver')

let lib = create.bind(this)

Object.assign(lib, SqliteDriver, {
  create,
  SqliteDriver
})

module.exports = lib
