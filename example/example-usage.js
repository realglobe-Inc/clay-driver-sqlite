'use strict'

const { SqliteDriver } = require('clay-driver-sqlite')

{
  const clayLump = require('clay-lump')
  let lump01 = clayLump({
    driver: new SqliteDriver({})
  })
  /* ... */
}
