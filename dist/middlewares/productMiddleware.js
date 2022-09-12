"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _userHelper = require("../helpers/userHelper");

var _models = _interopRequireDefault(require("../database/models"));

var userRoutes = _models["default"].User;

var Auth = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var token, decode, newUser;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            token = req.headers.authorization && req.headers.authorization.split(" ")[1];

            if (token) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(401).send({
              message: "You are not logged in!!!"
            }));

          case 4:
            decode = (0, _userHelper.decodeToken)(token);
            _context.next = 7;
            return userRoutes.findByPk(decode.userId, {
              include: [{
                model: _models["default"].Role,
                as: "Roles",
                attributes: ["role"]
              }]
            });

          case 7:
            newUser = _context.sent;

            if (!(newUser.roleId !== 1 && newUser.roleId !== 2)) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.status(401).send({
              message: "This action can only be performed by the admin or manager !!"
            }));

          case 10:
            req.user = newUser;
            next();
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).send({
              message: "".concat(_context.t0)
            }));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function Auth(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = Auth;
exports["default"] = _default;