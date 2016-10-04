# clay-driver-sqlite@1.0.0

Clay driver for sqlite

+ Functions
  + [create(args)](#clay-driver-sqlite-function-create)
+ [SqliteDriver](clay-driver-sqlite-classes) Class
  + [new SqliteDriver()](#clay-driver-sqlite-classes-sqlite-driver-constructor)
  + [driver.connect()](#clay-driver-sqlite-classes-sqlite-driver-connect)
  + [driver.create(namepath, data)](#clay-driver-sqlite-classes-sqlite-driver-create)
  + [driver.read(namepath)](#clay-driver-sqlite-classes-sqlite-driver-read)
  + [driver.update(namepath, data)](#clay-driver-sqlite-classes-sqlite-driver-update)
  + [driver.delete(namepath)](#clay-driver-sqlite-classes-sqlite-driver-delete)

## Functions

<a class='md-heading-link' name="clay-driver-sqlite-function-create" ></a>

### create(args) -> `MemoryDriver`

Create driver instance

| Param | Type | Description |
| ----- | --- | -------- |
| args | * |  |



<a class='md-heading-link' name="clay-driver-sqlite-classes"></a>

## SqliteDriver Class

Abstract driver


<a class='md-heading-link' name="clay-driver-sqlite-classes-sqlite-driver-constructor" ></a>

### new SqliteDriver()

Constructor of SqliteDriver class



<a class='md-heading-link' name="clay-driver-sqlite-classes-sqlite-driver-connect" ></a>

### driver.connect() -> `Promise`

Connect driver

<a class='md-heading-link' name="clay-driver-sqlite-classes-sqlite-driver-create" ></a>

### driver.create(namepath, data) -> `Promise`

Create data with namepath

| Param | Type | Description |
| ----- | --- | -------- |
| namepath | string | Namepath string |
| data | Object | Resource data to create |


<a class='md-heading-link' name="clay-driver-sqlite-classes-sqlite-driver-read" ></a>

### driver.read(namepath) -> `Promise`

Read data with namepath

| Param | Type | Description |
| ----- | --- | -------- |
| namepath | string | Namepath string |


<a class='md-heading-link' name="clay-driver-sqlite-classes-sqlite-driver-update" ></a>

### driver.update(namepath, data) -> `Promise`

Update data with namepath

| Param | Type | Description |
| ----- | --- | -------- |
| namepath | string | Namepath string |
| data | Object | Resource data to create |


<a class='md-heading-link' name="clay-driver-sqlite-classes-sqlite-driver-delete" ></a>

### driver.delete(namepath) -> `Promise`

Delete data with namepath

| Param | Type | Description |
| ----- | --- | -------- |
| namepath | string | Namepath string |




