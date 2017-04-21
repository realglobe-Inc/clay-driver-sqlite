/**
 * Driver to save data into sqlite
 * @inheritdoc
 * @augments SequelizeDriver
 * @class SqliteDriver
 * @param {string} filename - Filename to save
 * @param {Object} [options={}] - Optional settings
 * @param {boolean|function} [options.logging] - Logging option
 * @param {boolean} [options.benchmark] - Show benchmark on log
 */
'use strict'

const { SequelizeDriver } = require('clay-driver-sequelize')
const { clone } = require('asobj')
const path = require('path')
const mkdirp = require('mkdirp')
const { LogPrefixes } = require('clay-constants')

const { DRIVER_PREFIX } = LogPrefixes

/** @lends SqliteDriver */
class SqliteDriver extends SequelizeDriver {
  constructor (filename = 'var/clay.db', options = {}) {
    let {
      database = 'clay',
      logging = false,
      benchmark = false
    } = options
    mkdirp.sync(path.dirname(filename))
    super(database, null, null, {
      dialect: 'sqlite',
      storage: filename,
      logging,
      benchmark,
      isolationLevel: 'READ COMMITTED'
    })
  }

}

module.exports = SqliteDriver
