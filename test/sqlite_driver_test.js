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

  before(async () => {

  })

  after(async () => {

  })

  it('Sqlite driver', async () => {
    let filename = `${__dirname}/../tmp/foo/bar/baz.db`
    await filedel(filename)
    let driver = new SqliteDriver(filename, {
      logging: console.log,
      benchmark: true
    })

    let created = await driver.create('users', {
      username: 'okunishinishi'
    })
    let created2 = await driver.create('users', {
      username: 'hoge'
    })
    ok(created2.id !== created.id)
    ok(created.id)
    equal(created.username, 'okunishinishi')

    let one = await driver.one('users', created.id)

    equal(String(created.id), String(one.id))

    let updated = await driver.update('users', one.id, {
      password: 'hogehoge'
    })
    equal(String(updated.id), String(one.id))
    equal(updated.password, 'hogehoge')

    let list01 = await driver.list('users', {})
    deepEqual(list01.meta, { offset: 0, limit: 100, length: 2, total: 2 })

    let list02 = await driver.list('users', {
      filter: { username: 'okunishinishi' }
    })
    deepEqual(list02.meta, { offset: 0, limit: 100, length: 1, total: 1 })

    let list03 = await driver.list('users', {
      page: { size: 1, number: 1 }
    })
    deepEqual(list03.meta, { offset: 0, limit: 1, length: 1, total: 2 })

    let destroyed = await driver.destroy('users', one.id)
    equal(destroyed, 1)
    let destroyed2 = await driver.destroy('users', one.id)
    equal(destroyed2, 0)

    equal((await driver.list('users')).meta.total, 1)
    await driver.drop('users')
    equal((await driver.list('users')).meta.total, 0)
  })

  it('Run clayDriverTests', async () => {
    let driver = new SqliteDriver(`${__dirname}/../tmp/foo/bar/baz.db`)
    await clayDriverTests.run(driver)
  })

  // https://github.com/realglobe-Inc/clay-driver-sqlite/issues/5
  it('issues/5', async () => {
    let filename = `${__dirname}/../tmp/test-issues-5.db`
    await filedel(filename)
    const lump = clayLump('hec-eye-alpha', {
      driver: new SqliteDriver(filename, {
        logging: false
      })
    })
    let User = lump.resource('user')
    await User.drop()
    await User.create({ name: 'hoge' })
    let user = await User.first({ name: 'hoge' })
    let destroyed = await User.destroy(user.id)
    equal(destroyed, 1)
    let mustBeNull = await User.first({ name: 'hoge' })
    ok(!mustBeNull)
  })

  // https://github.com/realglobe-Inc/clay-resource/issues/28
  it('issues/28', async () => {
    let filename = `${__dirname}/../tmp/test-issues-28.db`
    await filedel(filename)
    const lump = clayLump('hec-eye-alpha', {
      driver: new SqliteDriver(filename, {
        logging: false
      })
    })
    let Person = lump.resource('Person')
    await Person.createBulk([ {
      pid: 1,
      name: 'a',
      age: 2
    }, {
      pid: 1,
      name: 'b',
      age: 1
    }, {
      pid: 1,
      name: 'c',
      age: 3
    }, {
      pid: 2,
      name: 'd',
      age: 6
    } ])

    {
      let people = await Person.list({ filter: { pid: 1 }, sort: [ 'age' ] })
      let ages = people.entities.map(p => p.age)
      deepEqual(ages, [ 1, 2, 3 ])
    }

    {
      let people = await Person.list({ filter: { pid: 1 }, sort: [ '-age' ] })
      let ages = people.entities.map(p => p.age)
      deepEqual(ages, [ 3, 2, 1 ])
    }
  })

  it('Nested attribute and refs', async () => {
    let driver = new SqliteDriver(`${__dirname}/../tmp/nested-attribute-and-refs.db`)
    let d = new Date()
    let created = await driver.create('Foo', {
      bar: {
        b: false,
        n: 1,
        s: 'hoge',
        d
      }
    })
    equal(typeof created.bar.b, 'boolean')
    equal(typeof created.bar.n, 'number')
    equal(typeof created.bar.s, 'string')
    ok(created.bar.d instanceof Date)

    await driver.drop('Foo')
    await driver.create('User', {
      name: 'user01',
      org: { $ref: 'Org#1' }
    })
    await driver.create('User', {
      name: 'user02',
      org: { $ref: 'Org#2' }
    })

    let list = await driver.list('User', {
      filter: {
        org: { $ref: 'Org#2' }
      }
    })
    equal(list.meta.length, 1)
    equal(list.entities[ 0 ].name, 'user02')

    await driver.drop('User')
  })
})

/* global describe, before, after, it */
