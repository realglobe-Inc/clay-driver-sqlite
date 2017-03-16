/**
 * Test case for sqliteDriver.
 * Runs with mocha.
 */
'use strict'

const clayDriverTests = require('clay-driver-tests')
const SqliteDriver = require('../lib/sqlite_driver.js')
const { ok, equal, deepEqual } = require('assert')
const clayLump = require('clay-lump')
const co = require('co')
const filedel = require('filedel')

describe('sqlite-driver', function () {
  this.timeout(13000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Sqlite driver', () => co(function * () {
    let filename = `${__dirname}/../tmp/foo/bar/baz.db`
    yield filedel(filename)
    let driver = new SqliteDriver(filename)

    let created = yield driver.create('users', {
      username: 'okunishinishi'
    })
    let created2 = yield driver.create('users', {
      username: 'hoge'
    })
    ok(created2.id !== created.id)
    ok(created.id)
    equal(created.username, 'okunishinishi')

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

  it('Run clayDriverTests', () => co(function * () {
    let driver = new SqliteDriver(`${__dirname}/../tmp/foo/bar/baz.db`)
    yield clayDriverTests.run(driver)
  }))

  // https://github.com/realglobe-Inc/clay-driver-sqlite/issues/5
  it('issues/5', () => co(function * () {
    let filename = `${__dirname}/../tmp/test-issues-5.db`
    yield filedel(filename)
    const lump = clayLump('hec-eye-alpha', {
      driver: new SqliteDriver(filename, {
        logging: false
      })
    })
    let User = lump.resource('user')
    yield User.drop()
    yield User.create({ name: 'hoge' })
    let user = yield User.first({ name: 'hoge' })
    let destroyed = yield User.destroy(user.id)
    equal(destroyed, 1)
    let mustBeNull = yield User.first({ name: 'hoge' })
    ok(!mustBeNull)
  }))
})

/* global describe, before, after, it */
