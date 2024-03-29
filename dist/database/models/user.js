"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var _require = require("sequelize"),
  Model = _require.Model;
module.exports = function (sequelize, DataTypes) {
  var User = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(User, _Model);
    var _super = _createSuper(User);
    function User() {
      (0, _classCallCheck2["default"])(this, User);
      return _super.apply(this, arguments);
    }
    (0, _createClass2["default"])(User, null, [{
      key: "associate",
      value: function associate(models) {
        this.belongsToMany(models.Category, {
          foreignKey: "userId",
          through: "User_Category"
        });
        this.belongsTo(models.Role, {
          foreignKey: {
            name: "roleId",
            allowNull: true
          },
          onDelete: "SET DEFAULT",
          as: "Roles"
        });
        this.hasOne(models.Profile, {
          foreignKey: "userId",
          as: "Profile",
          onDelete: "CASCADE"
        });
        this.hasMany(models.ProductComment, {
          foreignKey: "userId",
          as: "ProductComments",
          onDelete: "CASCADE"
        });
        this.hasMany(models.UserArticle, {
          foreignKey: "userId",
          as: "UserArticles",
          onDelete: "CASCADE"
        });
        this.hasMany(models.UserComment, {
          foreignKey: "userId",
          as: "UserComments",
          onDelete: "CASCADE"
        });
        this.hasMany(models.Tweet, {
          foreignKey: "userId",
          as: "Tweets",
          onDelete: "CASCADE"
        });
        this.hasOne(models.Review, {
          foreignKey: "userId",
          as: "Reviews",
          onDelete: "CASCADE"
        });
        this.belongsTo(models.User, {
          foreignKey: {
            name: "userId",
            allowNull: true
          },
          onDelete: "CASCADE",
          as: "Manager"
        });
        this.hasMany(models.User, {
          foreignKey: "userId",
          onDelete: "CASCADE"
        });
        this.hasMany(models.Company, {
          foreignKey: "userId",
          as: "Companies",
          onDelete: "CASCADE"
        });
      }
    }]);
    return User;
  }(Model);
  User.init({
    userId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    roleId: {
      allowNull: true,
      type: DataTypes.INTEGER,
      defaultValue: 4 // default role is client
    },

    managerId: {
      type: DataTypes.UUID,
      "default": null,
      references: {
        model: "Users",
        key: "userId",
        as: "Manager"
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 8
      }
    },
    userVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isSubscribed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize: sequelize,
    modelName: "User",
    tableName: "Users"
  });
  return User;
};