"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _categoryRoutes = _interopRequireDefault(require("./api/categoryRoutes.js"));

var _productRoutes = _interopRequireDefault(require("./api/productRoutes"));

var _productImagesRoutes = _interopRequireDefault(require("./api/productImagesRoutes.js"));

var _classRoutes = _interopRequireDefault(require("./api/classRoutes"));

var _userRoutes = _interopRequireDefault(require("./api/userRoutes"));

var _roleRoutes = _interopRequireDefault(require("./api/roleRoutes"));

var _assignUserToCategory = _interopRequireDefault(require("./api/assignUserToCategory"));

var _commentRoutes = _interopRequireDefault(require("./api/commentRoutes"));

var _articleRoutes = _interopRequireDefault(require("./api/articleRoutes"));

var _articleCommentRoutes = _interopRequireDefault(require("./api/articleCommentRoutes"));

var _tweetRoutes = _interopRequireDefault(require("./api/tweetRoutes"));

var _subscribeRoutes = _interopRequireDefault(require("./api/subscribeRoutes"));

var _reviewRoutes = _interopRequireDefault(require("./api/reviewRoutes"));

var _replyRoutes = _interopRequireDefault(require("./api/replyRoutes.js"));

var _rateRoutes = _interopRequireDefault(require("./api/rateRoutes.js"));

var _assignClassToCategory = _interopRequireDefault(require("./api/assignClassToCategory.js"));

var _assignProductToClass = _interopRequireDefault(require("./api/assignProductToClass.js"));

var _companyRoutes = _interopRequireDefault(require("./api/companyRoutes"));

var _comodityRoutes = _interopRequireDefault(require("./api/comodityRoutes"));

var _profileRoutes = _interopRequireDefault(require("./api/profileRoutes.js"));

var router = _express["default"].Router();

router.use("/categories", _categoryRoutes["default"]);
router.use("/class", _classRoutes["default"]);
router.use("/products", _productRoutes["default"]);
router.use("/images", _productImagesRoutes["default"]);
router.use("/users", _userRoutes["default"]);
router.use("/profile", _profileRoutes["default"]);
router.use("/company", _companyRoutes["default"]);
router.use("/comodities", _comodityRoutes["default"]);
router.use("/subscribe", _subscribeRoutes["default"]);
router.use("/roles", _roleRoutes["default"]);
router.use("/user_category", _assignUserToCategory["default"]);
router.use("/category_class", _assignClassToCategory["default"]);
router.use("/class_product", _assignProductToClass["default"]);
router.use("/comment", _commentRoutes["default"]);
router.use("/reply", _replyRoutes["default"]);
router.use("/article", _articleRoutes["default"]);
router.use("/article_comment", _articleCommentRoutes["default"]);
router.use("/tweet", _tweetRoutes["default"]);
router.use("/review", _reviewRoutes["default"]);
router.use("/rate", _rateRoutes["default"]);
var _default = router;
exports["default"] = _default;