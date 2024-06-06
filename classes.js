"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
    }
    return User;
}());
var prajwal = new User("p@p.p", "pt");
console.log(prajwal);
// pros method
var UserPro = /** @class */ (function () {
    function UserPro(email, name) {
        this.email = email;
        this.name = name;
        this._courserCount = 7;
    }
    UserPro.prototype.deleteToken = function () {
        console.log("deleted");
    };
    Object.defineProperty(UserPro.prototype, "getAppleEmail", {
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserPro.prototype, "courseCount", {
        get: function () {
            return this._courserCount;
        },
        // setter cant have return type
        set: function (courseCount) {
            if (courseCount) {
                throw new Error("dasfsd af ds");
            }
            this._courserCount = courseCount;
        },
        enumerable: false,
        configurable: true
    });
    return UserPro;
}());
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamilt = true;
        return _this;
    }
    SubUser.prototype.changeCourseCount = function () {
        this._courserCount = 4;
    };
    return SubUser;
}(UserPro));
