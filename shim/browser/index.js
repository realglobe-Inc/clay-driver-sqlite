/**
 * Clay driver for sqlite
 * @module clay-driver-sqlite
 * @version 1.0.1
 */

'use strict';

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var create = require('./create');
var SqliteDriver = require('./sqlite_driver');

var lib = create.bind(undefined);

(0, _assign2.default)(lib, SqliteDriver, {
  create: create,
  SqliteDriver: SqliteDriver
});

module.exports = lib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNyZWF0ZSIsInJlcXVpcmUiLCJTcWxpdGVEcml2ZXIiLCJsaWIiLCJiaW5kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQU1BOzs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsVUFBUixDQUFmO0FBQ0EsSUFBTUMsZUFBZUQsUUFBUSxpQkFBUixDQUFyQjs7QUFFQSxJQUFJRSxNQUFNSCxPQUFPSSxJQUFQLFdBQVY7O0FBRUEsc0JBQWNELEdBQWQsRUFBbUJELFlBQW5CLEVBQWlDO0FBQy9CRixnQkFEK0I7QUFFL0JFO0FBRitCLENBQWpDOztBQUtBRyxPQUFPQyxPQUFQLEdBQWlCSCxHQUFqQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJsaWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENsYXkgZHJpdmVyIGZvciBzcWxpdGVcbiAqIEBtb2R1bGUgY2xheS1kcml2ZXItc3FsaXRlXG4gKiBAdmVyc2lvbiAxLjAuMVxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCBjcmVhdGUgPSByZXF1aXJlKCcuL2NyZWF0ZScpXG5jb25zdCBTcWxpdGVEcml2ZXIgPSByZXF1aXJlKCcuL3NxbGl0ZV9kcml2ZXInKVxuXG5sZXQgbGliID0gY3JlYXRlLmJpbmQodGhpcylcblxuT2JqZWN0LmFzc2lnbihsaWIsIFNxbGl0ZURyaXZlciwge1xuICBjcmVhdGUsXG4gIFNxbGl0ZURyaXZlclxufSlcblxubW9kdWxlLmV4cG9ydHMgPSBsaWJcbiJdfQ==