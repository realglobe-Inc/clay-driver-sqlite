clay-driver-sqlite
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/clay-driver-sqlite
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/clay-driver-sqlite
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/clay-driver-sqlite.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/clay-driver-sqlite
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/clay-driver-sqlite.svg?token=
[bd_license_url]: https://github.com/realglobe-Inc/clay-driver-sqlite/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/clay-driver-sqlite
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/clay-driver-sqlite.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/clay-driver-sqlite.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/clay-driver-sqlite
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/clay-driver-sqlite.svg
[bd_npm_url]: http://www.npmjs.org/package/clay-driver-sqlite
[bd_npm_shield_url]: http://img.shields.io/npm/v/clay-driver-sqlite.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Clay driver for sqlite

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install clay-driver-sqlite --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
'use strict'

const { SqliteDriver } = require('clay-driver-sqlite')

{
  const clayLump = require('clay-lump')
  let lump01 = clayLump({
    driver: new SqliteDriver('var/lump/app.db')
  })
  /* ... */
}

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.API.md.hbs" Start -->

<a name="section-doc-guides-03-a-p-i-md"></a>

API
---------

# clay-driver-sqlite@6.3.3

Clay driver for sqlite

+ Functions
  + [create(args)](#clay-driver-sqlite-function-create)
+ [`SqliteDriver`](#clay-driver-sqlite-class) Class
  + [new SqliteDriver(filename, options)](#clay-driver-sqlite-class-sqlite-driver-constructor)

## Functions

<a class='md-heading-link' name="clay-driver-sqlite-function-create" ></a>

### create(args) -> `SqliteDriver`

Create driver instance

| Param | Type | Description |
| ----- | --- | -------- |
| args | * |  |



<a class='md-heading-link' name="clay-driver-sqlite-class"></a>

## `SqliteDriver` Class

Driver to save data into sqlite

**Extends**:

+ `SequelizeDriver`



<a class='md-heading-link' name="clay-driver-sqlite-class-sqlite-driver-constructor" ></a>

### new SqliteDriver(filename, options)

Constructor of SqliteDriver class

| Param | Type | Description |
| ----- | --- | -------- |
| filename | string | Filename to save |
| options | Object | Optional settings |
| options.logging | boolean,function | Logging option |
| options.benchmark | boolean | Show benchmark on log |







<!-- Section from "doc/guides/03.API.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [Apache-2.0 License](https://github.com/realglobe-Inc/clay-driver-sqlite/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [ClayDB][clay_d_b_url]
+ [Realglobe, Inc.][realglobe,_inc__url]
+ [Sequelize][sequelize_url]

[clay_d_b_url]: https://github.com/realglobe-Inc/claydb
[realglobe,_inc__url]: http://realglobe.jp
[sequelize_url]: http://docs.sequelizejs.com/

<!-- Links End -->
