/**
 * Create driver instance
 * @function create
 * @param {...*} args
 * @returns {SqliteDriver}
 */
'use strict';

var SqliteDriver = require('./sqlite_driver');

/** @lends create */
function create() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(SqliteDriver, [null].concat(args)))();
}

module.exports = create;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5qcyJdLCJuYW1lcyI6WyJTcWxpdGVEcml2ZXIiLCJyZXF1aXJlIiwiY3JlYXRlIiwiYXJncyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFNQTs7QUFFQSxJQUFNQSxlQUFlQyxRQUFRLGlCQUFSLENBQXJCOztBQUVBO0FBQ0EsU0FBU0MsTUFBVCxHQUEwQjtBQUFBLG9DQUFOQyxJQUFNO0FBQU5BLFFBQU07QUFBQTs7QUFDeEIsNENBQVdILFlBQVgsZ0JBQTJCRyxJQUEzQjtBQUNEOztBQUVEQyxPQUFPQyxPQUFQLEdBQWlCSCxNQUFqQiIsImZpbGUiOiJjcmVhdGUuanMiLCJzb3VyY2VSb290IjoibGliIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGUgZHJpdmVyIGluc3RhbmNlXG4gKiBAZnVuY3Rpb24gY3JlYXRlXG4gKiBAcGFyYW0gey4uLip9IGFyZ3NcbiAqIEByZXR1cm5zIHtTcWxpdGVEcml2ZXJ9XG4gKi9cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCBTcWxpdGVEcml2ZXIgPSByZXF1aXJlKCcuL3NxbGl0ZV9kcml2ZXInKVxuXG4vKiogQGxlbmRzIGNyZWF0ZSAqL1xuZnVuY3Rpb24gY3JlYXRlICguLi5hcmdzKSB7XG4gIHJldHVybiBuZXcgU3FsaXRlRHJpdmVyKC4uLmFyZ3MpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlXG4iXX0=