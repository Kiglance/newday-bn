"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _categoryClassController = require("../../controllers/categoryClassController.js");
var _productMiddleware = require("../../middlewares/productMiddleware");
var router = _express["default"].Router();
router.post("/", _productMiddleware.Auth, _categoryClassController.assignClass);
router.get("/", _categoryClassController.getAssignments);
router.get("/:id", _categoryClassController.getOneAssignment);
var _default = router;
exports["default"] = _default;