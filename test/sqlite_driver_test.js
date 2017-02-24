/**
 * Test case for sqliteDriver.
 * Runs with mocha.
 */
'use strict'

const clayDriverTests = require('clay-driver-tests')
const SqliteDriver = require('../lib/sqlite_driver.js')
const assert = require('assert')
const co = require('co')

describe('sqlite-driver', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Sqlite driver', () => co(function * () {
    let driver = new SqliteDriver(`${__dirname}/../tmp/foo/bar/baz.db`)

    let created = yield driver.create('users', {
      username: 'okunishinishi'
    })
    let created2 = yield driver.create('users', {
      username: 'hoge'
    })
    assert.ok(created2.id !== created.id)
    assert.ok(created.id)
    assert.equal(created.username, 'okunishinishi')

    let one = yield driver.one('users', created.id)

    assert.equal(String(created.id), String(one.id))

    let updated = yield driver.update('users', one.id, {
      password: 'hogehoge'
    })
    assert.equal(String(updated.id), String(one.id))
    assert.equal(updated.password, 'hogehoge')

    let list01 = yield driver.list('users', {})
    assert.deepEqual(list01.meta, { offset: 0, limit: 100, length: 2, total: 2 })

    let list02 = yield driver.list('users', {
      filter: { username: 'okunishinishi' }
    })
    assert.deepEqual(list02.meta, { offset: 0, limit: 100, length: 1, total: 1 })

    let list03 = yield driver.list('users', {
      page: { size: 1, number: 1 }
    })
    assert.deepEqual(list03.meta, { offset: 0, limit: 1, length: 1, total: 2 })

    let destroyed = yield driver.destroy('users', one.id)
    assert.equal(destroyed, 1)
    let destroyed2 = yield driver.destroy('users', one.id)
    assert.equal(destroyed2, 0)

    assert.equal((yield driver.list('users')).meta.total, 1)
    yield driver.drop('users')
    assert.equal((yield driver.list('users')).meta.total, 0)
  }))

  it('Run clayDriverTests', () => co(function * () {
    let driver = new SqliteDriver(`${__dirname}/../tmp/foo/bar/baz.db`)
    yield clayDriverTests.run(driver)
  }))
})

/* global describe, before, after, it */
