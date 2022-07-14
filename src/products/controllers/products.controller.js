"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.ProductsController = void 0;
var common_1 = require("@nestjs/common");
var parse_int_pipe_1 = require("../../common/parse-int.pipe");
var ProductsController = /** @class */ (function () {
    function ProductsController(productsService) {
        this.productsService = productsService;
    }
    ProductsController.prototype.getProducts = function (limit, offset, brand) {
        if (limit === void 0) { limit = 100; }
        if (offset === void 0) { offset = 0; }
        return this.productsService.findAll();
    };
    ProductsController.prototype.getProduct = function (productId) {
        return this.productsService.findOne(productId);
    };
    ProductsController.prototype.createProduct = function (body) {
        return this.productsService.create(body);
    };
    ProductsController.prototype.updateProduct = function (productId, body) {
        return this.productsService.update(productId, body);
    };
    ProductsController.prototype.deleteProduct = function (productId) {
        return this.productsService["delete"](productId);
    };
    __decorate([
        (0, common_1.Get)(),
        __param(0, (0, common_1.Query)('limit')),
        __param(1, (0, common_1.Query)('offset')),
        __param(2, (0, common_1.Query)('brand'))
    ], ProductsController.prototype, "getProducts");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id', parse_int_pipe_1.ParseIntPipe))
    ], ProductsController.prototype, "getProduct");
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], ProductsController.prototype, "createProduct");
    __decorate([
        (0, common_1.Put)(':id'),
        __param(0, (0, common_1.Param)('id', parse_int_pipe_1.ParseIntPipe)),
        __param(1, (0, common_1.Body)())
    ], ProductsController.prototype, "updateProduct");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id', parse_int_pipe_1.ParseIntPipe))
    ], ProductsController.prototype, "deleteProduct");
    ProductsController = __decorate([
        (0, common_1.Controller)('products')
    ], ProductsController);
    return ProductsController;
}());
exports.ProductsController = ProductsController;
