#!/usr/bin/env node
/**
 * Run driver benchmark
 */
'use strict'

const { run } = require('clay-driver-benchmarks')
const { SqliteDriver } = require('../lib')
const filedel = require('filedel')
const co = require('co')
const storage = `${__dirname}/../tmp/benchmark-test.db`

co(function * () {
  yield filedel(storage)
  let dirver = new SqliteDriver(storage)
  yield run(dirver)
}).catch((err) => {
  console.error(err)
  process.exit(1)
})
