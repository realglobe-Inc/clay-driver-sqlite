/**
 * Test case for sqliteDriver.
 * Runs with mocha.
 */
'use strict'

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
    let driver = new SqliteDriver()

    yield driver.connect(`${__dirname}/../tmp/foo/bar/baz.db`)

    yield driver.create('/foo/bar/baz', {
      key: 'baz',
      value: { hoge: 'This is hoge' },
      at: new Date()
    })
    {
      let baz = yield driver.read('/foo/bar/baz')
      assert.deepEqual(baz.value, { hoge: 'This is hoge' })
    }
    yield driver.update('/foo/bar/baz', {
      value: { hoge: 'This is hoge2' }
    })
    {
      let baz = yield driver.read('/foo/bar/baz')
      assert.deepEqual(baz.value, { hoge: 'This is hoge2' })
    }
    yield driver.delete('/foo/bar/baz')

    yield driver.disconnect()
  }))
})

/* global describe, before, after, it */
