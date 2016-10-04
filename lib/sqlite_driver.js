/**
 * Abstract driver
 * @augments SequelizeDriver
 * @class SqlitSqliteDrivereDriver
 */
'use strict'

const { SequelizeDriver } = require('clay-driver-sequelize')
const co = require('co')
const abind = require('abind')
const path = require('path')
const Sequelize = require('sequelize')
const { mkdirpAsync } = require('asfs')
const { LogPrefixes } = require('clay-constants')

const { DRIVER_PREFIX } = LogPrefixes

/** @lends SequelizeDriver */
class SqliteDriver extends SequelizeDriver {

// ---------------------
// Basic Interfaces
// ---------------------
  constructor () {
    super()
    const s = this
    s.sequelize = null
    abind(s)
  }

  /**
   * Connect driver
   * @param {string} filename
   * @param {Object} [options={}]
   * @returns {Promise}
   */
  connect (filename = 'var/clay.db', options = {}) {
    let { database = 'clay' } = options
    const s = this
    if (s.sequelize) {
      throw new Error(`${DRIVER_PREFIX} sequelize already connected`)
    }
    return co(function * () {
      yield mkdirpAsync(path.dirname(filename))
      let sequelize = new Sequelize(database, null, null, {
        dialect: 'sqlite',
        storage: filename
      })

      let Record = s.defineRecord(sequelize)

      yield Record.sync()

      Object.assign(s, {
        Record, sequelize
      })
      return s
    })
  }

  // ---------------------
  // CRUD Interfaces
  // ---------------------

  /**
   * Create data with namepath
   * @param {string} namepath - Namepath string
   * @param {Object} data - Resource data to create
   * @returns {Promise}
   */
  create (namepath, data) {
    return super.create(...arguments)
  }

  /**
   * Read data with namepath
   * @param {string} namepath - Namepath string
   * @returns {Promise}
   */
  read (namepath) {
    return super.read(...arguments)
  }

  /**
   * Update data with namepath
   * @param {string} namepath - Namepath string
   * @param {Object} data - Resource data to create
   * @returns {Promise}
   */
  update (namepath, data) {
    return super.update(...arguments)
  }

  /**
   * Delete data with namepath
   * @param {string} namepath - Namepath string
   * @returns {Promise}
   */
  delete (namepath) {
    return super.delete(...arguments)
  }
}

module.exports = SqliteDriver
