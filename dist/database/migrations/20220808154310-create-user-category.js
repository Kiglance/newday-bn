'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
function cov_10jh6ts5ll() {
  var path = "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\migrations\\20220808154310-create-user-category.js";
  var hash = "91092168daa7ff5757a71275efcf152bf622881c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\ypatr\\Desktop\\CODES\\NewDay\\newday-be\\newday-backend\\src\\database\\migrations\\20220808154310-create-user-category.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 0
        },
        end: {
          line: 29,
          column: 2
        }
      },
      "1": {
        start: {
          line: 4,
          column: 4
        },
        end: {
          line: 24,
          column: 7
        }
      },
      "2": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 54
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 2
          },
          end: {
            line: 3,
            column: 3
          }
        },
        loc: {
          start: {
            line: 3,
            column: 38
          },
          end: {
            line: 25,
            column: 3
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        },
        loc: {
          start: {
            line: 26,
            column: 40
          },
          end: {
            line: 28,
            column: 3
          }
        },
        line: 26
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "91092168daa7ff5757a71275efcf152bf622881c"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_10jh6ts5ll = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_10jh6ts5ll();
cov_10jh6ts5ll().s[0]++;
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            cov_10jh6ts5ll().f[0]++;
            cov_10jh6ts5ll().s[1]++;
            _context.next = 4;
            return queryInterface.createTable("User_Categories", {
              userCategoryId: {
                type: Sequelize.UUID,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4
              },
              userId: {
                type: Sequelize.UUID
              },
              categoryId: {
                type: Sequelize.UUID
              },
              createdAt: {
                allowNull: false,
                type: Sequelize.DATE
              },
              updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
              }
            });
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  down: function down(queryInterface, Sequelize) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            cov_10jh6ts5ll().f[1]++;
            cov_10jh6ts5ll().s[2]++;
            _context2.next = 4;
            return queryInterface.dropTable('User_Categories');
          case 4:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }
};