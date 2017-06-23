# clay-driver-sqlite@3.0.5

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




