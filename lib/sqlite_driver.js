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

const {SequelizeDriver} = require('clay-driver-sequelize')
const {clone} = require('asobj')
const path = require('path')
const amkdirp = require('amkdirp')
const moment = require('moment')
const filecopy = require('filecopy')
const mkdirp = require('mkdirp')

const {LogPrefixes, DateFormats} = require('clay-constants')

const {DRIVER_PREFIX} = LogPrefixes
const {DUMP_FILENAME_FORMAT} = DateFormats

/** @lends SqliteDriver */
class SqliteDriver extends SequelizeDriver {
  constructor (filename = 'var/clay.db', options = {}) {
    const {
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
      retry: {max: 10, match: ['SQLITE_BUSY: database is locked']},
      isolationLevel: 'READ COMMITTED'
    })
    this.storage = filename
  }

  get config () {
    return super.config || this._db.config
  }

  async dump (dirname, options = {}) {
    const {storage} = this
    const filename = path.join(dirname, moment(new Date()).format(DUMP_FILENAME_FORMAT) + '.db')
    await amkdirp(dirname)
    await filecopy(
      storage,
      filename
    )
    return {filename}
  }

  async restore (dirname, options = {}) {
    throw new Error(`Not implemented!`)
  }
}

module.exports = SqliteDriver
