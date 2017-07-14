/**
 * Clay driver for sqlite
 * @module clay-driver-sqlite
 * @version 4.0.3
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
