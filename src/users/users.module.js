"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersModule = void 0;
var common_1 = require("@nestjs/common");
var users_service_1 = require("./services/users.service");
var customers_service_1 = require("./services/customers.service");
var users_controller_1 = require("./controllers/users.controller");
var customers_controller_1 = require("./controllers/customers.controller");
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        (0, common_1.Module)({
            controllers: [users_controller_1.UsersController, customers_controller_1.CustomersController],
            providers: [users_service_1.UsersService, customers_service_1.CustomersService]
        })
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;
