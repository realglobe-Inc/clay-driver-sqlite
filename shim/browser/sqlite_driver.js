/**
 * Driver to save data into sqlite
 * @augments SequelizeDriver
 * @class SqlitDriver
 */
'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('clay-driver-sequelize');

var SequelizeDriver = _require.SequelizeDriver;

var path = require('path');
var mkdirp = require('mkdirp');

var _require2 = require('clay-constants');

var LogPrefixes = _require2.LogPrefixes;
var DRIVER_PREFIX = LogPrefixes.DRIVER_PREFIX;

/** @lends SequelizeDriver */

var SqliteDriver = function (_SequelizeDriver) {
  (0, _inherits3.default)(SqliteDriver, _SequelizeDriver);

  // ---------------------
  // Basic Interfaces
  // ---------------------
  function SqliteDriver() {
    var filename = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'var/clay.db';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck3.default)(this, SqliteDriver);
    var _options$database = options.database;
    var database = _options$database === undefined ? 'clay' : _options$database;

    mkdirp.sync(path.dirname(filename));
    return (0, _possibleConstructorReturn3.default)(this, (SqliteDriver.__proto__ || (0, _getPrototypeOf2.default)(SqliteDriver)).call(this, database, null, null, {
      dialect: 'sqlite',
      storage: filename
    }));
  }

  return SqliteDriver;
}(SequelizeDriver);

module.exports = SqliteDriver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNxbGl0ZV9kcml2ZXIuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIlNlcXVlbGl6ZURyaXZlciIsInBhdGgiLCJta2RpcnAiLCJMb2dQcmVmaXhlcyIsIkRSSVZFUl9QUkVGSVgiLCJTcWxpdGVEcml2ZXIiLCJmaWxlbmFtZSIsIm9wdGlvbnMiLCJkYXRhYmFzZSIsInN5bmMiLCJkaXJuYW1lIiwiZGlhbGVjdCIsInN0b3JhZ2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFFNEJBLFFBQVEsdUJBQVIsQzs7SUFBcEJDLGUsWUFBQUEsZTs7QUFDUixJQUFNQyxPQUFPRixRQUFRLE1BQVIsQ0FBYjtBQUNBLElBQU1HLFNBQVNILFFBQVEsUUFBUixDQUFmOztnQkFDd0JBLFFBQVEsZ0JBQVIsQzs7SUFBaEJJLFcsYUFBQUEsVztJQUVBQyxhLEdBQWtCRCxXLENBQWxCQyxhOztBQUVSOztJQUNNQyxZOzs7QUFFTjtBQUNBO0FBQ0E7QUFDRSwwQkFBcUQ7QUFBQSxRQUF4Q0MsUUFBd0MsdUVBQTdCLGFBQTZCO0FBQUEsUUFBZEMsT0FBYyx1RUFBSixFQUFJO0FBQUE7QUFBQSw0QkFDdkJBLE9BRHVCLENBQzdDQyxRQUQ2QztBQUFBLFFBQzdDQSxRQUQ2QyxxQ0FDbEMsTUFEa0M7O0FBRW5ETixXQUFPTyxJQUFQLENBQVlSLEtBQUtTLE9BQUwsQ0FBYUosUUFBYixDQUFaO0FBRm1ELDZJQUc3Q0UsUUFINkMsRUFHbkMsSUFIbUMsRUFHN0IsSUFINkIsRUFHdkI7QUFDMUJHLGVBQVMsUUFEaUI7QUFFMUJDLGVBQVNOO0FBRmlCLEtBSHVCO0FBT3BEOzs7RUFad0JOLGU7O0FBZ0IzQmEsT0FBT0MsT0FBUCxHQUFpQlQsWUFBakIiLCJmaWxlIjoic3FsaXRlX2RyaXZlci5qcyIsInNvdXJjZVJvb3QiOiJsaWIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIERyaXZlciB0byBzYXZlIGRhdGEgaW50byBzcWxpdGVcbiAqIEBhdWdtZW50cyBTZXF1ZWxpemVEcml2ZXJcbiAqIEBjbGFzcyBTcWxpdERyaXZlclxuICovXG4ndXNlIHN0cmljdCdcblxuY29uc3QgeyBTZXF1ZWxpemVEcml2ZXIgfSA9IHJlcXVpcmUoJ2NsYXktZHJpdmVyLXNlcXVlbGl6ZScpXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5jb25zdCBta2RpcnAgPSByZXF1aXJlKCdta2RpcnAnKVxuY29uc3QgeyBMb2dQcmVmaXhlcyB9ID0gcmVxdWlyZSgnY2xheS1jb25zdGFudHMnKVxuXG5jb25zdCB7IERSSVZFUl9QUkVGSVggfSA9IExvZ1ByZWZpeGVzXG5cbi8qKiBAbGVuZHMgU2VxdWVsaXplRHJpdmVyICovXG5jbGFzcyBTcWxpdGVEcml2ZXIgZXh0ZW5kcyBTZXF1ZWxpemVEcml2ZXIge1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEJhc2ljIEludGVyZmFjZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25zdHJ1Y3RvciAoZmlsZW5hbWUgPSAndmFyL2NsYXkuZGInLCBvcHRpb25zID0ge30pIHtcbiAgICBsZXQgeyBkYXRhYmFzZSA9ICdjbGF5JyB9ID0gb3B0aW9uc1xuICAgIG1rZGlycC5zeW5jKHBhdGguZGlybmFtZShmaWxlbmFtZSkpXG4gICAgc3VwZXIoZGF0YWJhc2UsIG51bGwsIG51bGwsIHtcbiAgICAgIGRpYWxlY3Q6ICdzcWxpdGUnLFxuICAgICAgc3RvcmFnZTogZmlsZW5hbWVcbiAgICB9KVxuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTcWxpdGVEcml2ZXJcbiJdfQ==