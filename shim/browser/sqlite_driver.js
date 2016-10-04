/**
 * Abstract driver
 * @augments SequelizeDriver
 * @class SqlitSqliteDrivereDriver
 */
'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('clay-driver-sequelize');

var SequelizeDriver = _require.SequelizeDriver;

var co = require('co');
var abind = require('abind');
var path = require('path');
var Sequelize = require('sequelize');

var _require2 = require('asfs');

var mkdirpAsync = _require2.mkdirpAsync;

var _require3 = require('clay-constants');

var LogPrefixes = _require3.LogPrefixes;
var DRIVER_PREFIX = LogPrefixes.DRIVER_PREFIX;

/** @lends SequelizeDriver */

var SqliteDriver = function (_SequelizeDriver) {
  (0, _inherits3.default)(SqliteDriver, _SequelizeDriver);

  // ---------------------
  // Basic Interfaces
  // ---------------------
  function SqliteDriver() {
    (0, _classCallCheck3.default)(this, SqliteDriver);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SqliteDriver.__proto__ || (0, _getPrototypeOf2.default)(SqliteDriver)).call(this));

    var s = _this;
    s.sequelize = null;
    abind(s);
    return _this;
  }

  /**
   * Connect driver
   * @param {string} filename
   * @param {Object} [options={}]
   * @returns {Promise}
   */


  (0, _createClass3.default)(SqliteDriver, [{
    key: 'connect',
    value: function connect() {
      var filename = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'var/clay.db';
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$database = options.database;
      var database = _options$database === undefined ? 'clay' : _options$database;

      var s = this;
      if (s.sequelize) {
        throw new Error(DRIVER_PREFIX + ' sequelize already connected');
      }
      return co(_regenerator2.default.mark(function _callee() {
        var sequelize, Record;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return mkdirpAsync(path.dirname(filename));

              case 2:
                sequelize = new Sequelize(database, null, null, {
                  dialect: 'sqlite',
                  storage: filename
                });
                Record = s.defineRecord(sequelize);
                _context.next = 6;
                return Record.sync();

              case 6:

                (0, _assign2.default)(s, {
                  Record: Record, sequelize: sequelize
                });
                return _context.abrupt('return', s);

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }

    // ---------------------
    // CRUD Interfaces
    // ---------------------

    /**
     * Create data with namepath
     * @param {string} namepath - Namepath string
     * @param {Object} data - Resource data to create
     * @returns {Promise}
     */

  }, {
    key: 'create',
    value: function create(namepath, data) {
      return (0, _get3.default)(SqliteDriver.prototype.__proto__ || (0, _getPrototypeOf2.default)(SqliteDriver.prototype), 'create', this).apply(this, arguments);
    }

    /**
     * Read data with namepath
     * @param {string} namepath - Namepath string
     * @returns {Promise}
     */

  }, {
    key: 'read',
    value: function read(namepath) {
      return (0, _get3.default)(SqliteDriver.prototype.__proto__ || (0, _getPrototypeOf2.default)(SqliteDriver.prototype), 'read', this).apply(this, arguments);
    }

    /**
     * Update data with namepath
     * @param {string} namepath - Namepath string
     * @param {Object} data - Resource data to create
     * @returns {Promise}
     */

  }, {
    key: 'update',
    value: function update(namepath, data) {
      return (0, _get3.default)(SqliteDriver.prototype.__proto__ || (0, _getPrototypeOf2.default)(SqliteDriver.prototype), 'update', this).apply(this, arguments);
    }

    /**
     * Delete data with namepath
     * @param {string} namepath - Namepath string
     * @returns {Promise}
     */

  }, {
    key: 'delete',
    value: function _delete(namepath) {
      return (0, _get3.default)(SqliteDriver.prototype.__proto__ || (0, _getPrototypeOf2.default)(SqliteDriver.prototype), 'delete', this).apply(this, arguments);
    }
  }]);
  return SqliteDriver;
}(SequelizeDriver);

module.exports = SqliteDriver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNxbGl0ZV9kcml2ZXIuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIlNlcXVlbGl6ZURyaXZlciIsImNvIiwiYWJpbmQiLCJwYXRoIiwiU2VxdWVsaXplIiwibWtkaXJwQXN5bmMiLCJMb2dQcmVmaXhlcyIsIkRSSVZFUl9QUkVGSVgiLCJTcWxpdGVEcml2ZXIiLCJzIiwic2VxdWVsaXplIiwiZmlsZW5hbWUiLCJvcHRpb25zIiwiZGF0YWJhc2UiLCJFcnJvciIsImRpcm5hbWUiLCJkaWFsZWN0Iiwic3RvcmFnZSIsIlJlY29yZCIsImRlZmluZVJlY29yZCIsInN5bmMiLCJuYW1lcGF0aCIsImRhdGEiLCJhcmd1bWVudHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBRTRCQSxRQUFRLHVCQUFSLEM7O0lBQXBCQyxlLFlBQUFBLGU7O0FBQ1IsSUFBTUMsS0FBS0YsUUFBUSxJQUFSLENBQVg7QUFDQSxJQUFNRyxRQUFRSCxRQUFRLE9BQVIsQ0FBZDtBQUNBLElBQU1JLE9BQU9KLFFBQVEsTUFBUixDQUFiO0FBQ0EsSUFBTUssWUFBWUwsUUFBUSxXQUFSLENBQWxCOztnQkFDd0JBLFFBQVEsTUFBUixDOztJQUFoQk0sVyxhQUFBQSxXOztnQkFDZ0JOLFFBQVEsZ0JBQVIsQzs7SUFBaEJPLFcsYUFBQUEsVztJQUVBQyxhLEdBQWtCRCxXLENBQWxCQyxhOztBQUVSOztJQUNNQyxZOzs7QUFFTjtBQUNBO0FBQ0E7QUFDRSwwQkFBZTtBQUFBOztBQUFBOztBQUViLFFBQU1DLFNBQU47QUFDQUEsTUFBRUMsU0FBRixHQUFjLElBQWQ7QUFDQVIsVUFBTU8sQ0FBTjtBQUphO0FBS2Q7O0FBRUQ7Ozs7Ozs7Ozs7OEJBTWlEO0FBQUEsVUFBeENFLFFBQXdDLHVFQUE3QixhQUE2QjtBQUFBLFVBQWRDLE9BQWMsdUVBQUosRUFBSTtBQUFBLDhCQUNuQkEsT0FEbUIsQ0FDekNDLFFBRHlDO0FBQUEsVUFDekNBLFFBRHlDLHFDQUM5QixNQUQ4Qjs7QUFFL0MsVUFBTUosSUFBSSxJQUFWO0FBQ0EsVUFBSUEsRUFBRUMsU0FBTixFQUFpQjtBQUNmLGNBQU0sSUFBSUksS0FBSixDQUFhUCxhQUFiLGtDQUFOO0FBQ0Q7QUFDRCxhQUFPTiw4QkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNGSSxZQUFZRixLQUFLWSxPQUFMLENBQWFKLFFBQWIsQ0FBWixDQURFOztBQUFBO0FBRUpELHlCQUZJLEdBRVEsSUFBSU4sU0FBSixDQUFjUyxRQUFkLEVBQXdCLElBQXhCLEVBQThCLElBQTlCLEVBQW9DO0FBQ2xERywyQkFBUyxRQUR5QztBQUVsREMsMkJBQVNOO0FBRnlDLGlCQUFwQyxDQUZSO0FBT0pPLHNCQVBJLEdBT0tULEVBQUVVLFlBQUYsQ0FBZVQsU0FBZixDQVBMO0FBQUE7QUFBQSx1QkFTRlEsT0FBT0UsSUFBUCxFQVRFOztBQUFBOztBQVdSLHNDQUFjWCxDQUFkLEVBQWlCO0FBQ2ZTLGdDQURlLEVBQ1BSO0FBRE8saUJBQWpCO0FBWFEsaURBY0RELENBZEM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSCxFQUFQO0FBZ0JEOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OzJCQU1RWSxRLEVBQVVDLEksRUFBTTtBQUN0Qix1SkFBdUJDLFNBQXZCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O3lCQUtNRixRLEVBQVU7QUFDZCxxSkFBcUJFLFNBQXJCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzsyQkFNUUYsUSxFQUFVQyxJLEVBQU07QUFDdEIsdUpBQXVCQyxTQUF2QjtBQUNEOztBQUVEOzs7Ozs7Ozs0QkFLUUYsUSxFQUFVO0FBQ2hCLHVKQUF1QkUsU0FBdkI7QUFDRDs7O0VBbEZ3QnZCLGU7O0FBcUYzQndCLE9BQU9DLE9BQVAsR0FBaUJqQixZQUFqQiIsImZpbGUiOiJzcWxpdGVfZHJpdmVyLmpzIiwic291cmNlUm9vdCI6ImxpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQWJzdHJhY3QgZHJpdmVyXG4gKiBAYXVnbWVudHMgU2VxdWVsaXplRHJpdmVyXG4gKiBAY2xhc3MgU3FsaXRTcWxpdGVEcml2ZXJlRHJpdmVyXG4gKi9cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCB7IFNlcXVlbGl6ZURyaXZlciB9ID0gcmVxdWlyZSgnY2xheS1kcml2ZXItc2VxdWVsaXplJylcbmNvbnN0IGNvID0gcmVxdWlyZSgnY28nKVxuY29uc3QgYWJpbmQgPSByZXF1aXJlKCdhYmluZCcpXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5jb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKVxuY29uc3QgeyBta2RpcnBBc3luYyB9ID0gcmVxdWlyZSgnYXNmcycpXG5jb25zdCB7IExvZ1ByZWZpeGVzIH0gPSByZXF1aXJlKCdjbGF5LWNvbnN0YW50cycpXG5cbmNvbnN0IHsgRFJJVkVSX1BSRUZJWCB9ID0gTG9nUHJlZml4ZXNcblxuLyoqIEBsZW5kcyBTZXF1ZWxpemVEcml2ZXIgKi9cbmNsYXNzIFNxbGl0ZURyaXZlciBleHRlbmRzIFNlcXVlbGl6ZURyaXZlciB7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQmFzaWMgSW50ZXJmYWNlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgY29uc3QgcyA9IHRoaXNcbiAgICBzLnNlcXVlbGl6ZSA9IG51bGxcbiAgICBhYmluZChzKVxuICB9XG5cbiAgLyoqXG4gICAqIENvbm5lY3QgZHJpdmVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlbmFtZVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgY29ubmVjdCAoZmlsZW5hbWUgPSAndmFyL2NsYXkuZGInLCBvcHRpb25zID0ge30pIHtcbiAgICBsZXQgeyBkYXRhYmFzZSA9ICdjbGF5JyB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHMgPSB0aGlzXG4gICAgaWYgKHMuc2VxdWVsaXplKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7RFJJVkVSX1BSRUZJWH0gc2VxdWVsaXplIGFscmVhZHkgY29ubmVjdGVkYClcbiAgICB9XG4gICAgcmV0dXJuIGNvKGZ1bmN0aW9uICogKCkge1xuICAgICAgeWllbGQgbWtkaXJwQXN5bmMocGF0aC5kaXJuYW1lKGZpbGVuYW1lKSlcbiAgICAgIGxldCBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKGRhdGFiYXNlLCBudWxsLCBudWxsLCB7XG4gICAgICAgIGRpYWxlY3Q6ICdzcWxpdGUnLFxuICAgICAgICBzdG9yYWdlOiBmaWxlbmFtZVxuICAgICAgfSlcblxuICAgICAgbGV0IFJlY29yZCA9IHMuZGVmaW5lUmVjb3JkKHNlcXVlbGl6ZSlcblxuICAgICAgeWllbGQgUmVjb3JkLnN5bmMoKVxuXG4gICAgICBPYmplY3QuYXNzaWduKHMsIHtcbiAgICAgICAgUmVjb3JkLCBzZXF1ZWxpemVcbiAgICAgIH0pXG4gICAgICByZXR1cm4gc1xuICAgIH0pXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQ1JVRCBJbnRlcmZhY2VzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgZGF0YSB3aXRoIG5hbWVwYXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lcGF0aCAtIE5hbWVwYXRoIHN0cmluZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIFJlc291cmNlIGRhdGEgdG8gY3JlYXRlXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgY3JlYXRlIChuYW1lcGF0aCwgZGF0YSkge1xuICAgIHJldHVybiBzdXBlci5jcmVhdGUoLi4uYXJndW1lbnRzKVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQgZGF0YSB3aXRoIG5hbWVwYXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lcGF0aCAtIE5hbWVwYXRoIHN0cmluZ1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHJlYWQgKG5hbWVwYXRoKSB7XG4gICAgcmV0dXJuIHN1cGVyLnJlYWQoLi4uYXJndW1lbnRzKVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBkYXRhIHdpdGggbmFtZXBhdGhcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVwYXRoIC0gTmFtZXBhdGggc3RyaW5nXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gUmVzb3VyY2UgZGF0YSB0byBjcmVhdGVcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICB1cGRhdGUgKG5hbWVwYXRoLCBkYXRhKSB7XG4gICAgcmV0dXJuIHN1cGVyLnVwZGF0ZSguLi5hcmd1bWVudHMpXG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGRhdGEgd2l0aCBuYW1lcGF0aFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZXBhdGggLSBOYW1lcGF0aCBzdHJpbmdcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBkZWxldGUgKG5hbWVwYXRoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmRlbGV0ZSguLi5hcmd1bWVudHMpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTcWxpdGVEcml2ZXJcbiJdfQ==