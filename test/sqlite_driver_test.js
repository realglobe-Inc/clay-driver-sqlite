/**
 * Test case for sqliteDriver.
 * Runs with mocha.
 */
'use strict'

const clayDriverTests = require('clay-driver-tests')
const SqliteDriver = require('../lib/sqlite_driver.js')
const { ok, equal, deepEqual } = require('assert')
const rimraf = require('rimraf')
const co = require('co')

describe('sqlite-driver', function () {
  this.timeout(13000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Sqlite driver', () => co(function * () {
    let filename = `${__dirname}/../tmp/foo/bar/baz.db`
    rimraf.sync(filename)
    let driver = new SqliteDriver(filename)

    let created = yield driver.create('users', {
      username: 'okunishinishi',
      // createdAt: new Date()
    })
    let created2 = yield driver.create('users', {
      username: 'hoge'
    })
    ok(created2.id !== created.id)
    ok(created.id)
    equal(created.username, 'okunishinishi')
    console.log(created.createdAt)

    let one = yield driver.one('users', created.id)

    equal(String(created.id), String(one.id))

    let updated = yield driver.update('users', one.id, {
      password: 'hogehoge'
    })
    equal(String(updated.id), String(one.id))
    equal(updated.password, 'hogehoge')

    let list01 = yield driver.list('users', {})
    deepEqual(list01.meta, { offset: 0, limit: 100, length: 2, total: 2 })

    let list02 = yield driver.list('users', {
      filter: { username: 'okunishinishi' }
    })
    deepEqual(list02.meta, { offset: 0, limit: 100, length: 1, total: 1 })

    let list03 = yield driver.list('users', {
      page: { size: 1, number: 1 }
    })
    deepEqual(list03.meta, { offset: 0, limit: 1, length: 1, total: 2 })

    let destroyed = yield driver.destroy('users', one.id)
    equal(destroyed, 1)
    let destroyed2 = yield driver.destroy('users', one.id)
    equal(destroyed2, 0)

    equal((yield driver.list('users')).meta.total, 1)
    yield driver.drop('users')
    equal((yield driver.list('users')).meta.total, 0)
  }))

  // it('Run clayDriverTests', () => co(function * () {
  //   let filename = `${__dirname}/../tmp/foo/bar/baz2.db`
  //   rimraf.sync(filename)
  //   let driver = new SqliteDriver(filename)
  //   yield clayDriverTests.run(driver)
  // }))
})

/* global describe, before, after, it */
