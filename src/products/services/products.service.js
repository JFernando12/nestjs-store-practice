"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductsService = void 0;
var common_1 = require("@nestjs/common");
var ProductsService = /** @class */ (function () {
    function ProductsService() {
        this.productId = 1;
        this.products = [{
                id: 1,
                name: "Lampara",
                description: "7 Colores",
                price: 598,
                stock: 20,
                image: ""
            }];
    }
    ProductsService.prototype.newId = function () {
        this.productId = this.productId + 1;
    };
    ProductsService.prototype.findAll = function () {
        return this.products;
    };
    ProductsService.prototype.findOne = function (id) {
        var product = this.products.find(function (product) { return product.id === id; });
        if (!product) {
            throw new common_1.NotFoundException("Product #".concat(id, " not found"));
        }
        return product;
    };
    ProductsService.prototype.create = function (payload) {
        this.newId();
        var newProduct = __assign({ id: this.productId }, payload);
        this.products.push(newProduct);
        return newProduct;
    };
    ProductsService.prototype.update = function (id, payload) {
        var index = this.products.findIndex(function (product) { return product.id === id; });
        var product = this.products.find(function (product) { return product.id === id; });
        var newProduct = __assign(__assign({}, product), payload);
        this.products[index] = newProduct;
        return newProduct;
    };
    ProductsService.prototype["delete"] = function (id) {
        this.products = this.products.filter(function (product) { return product.id !== id; });
        return "Producto ".concat(id, " eliminado");
    };
    ProductsService = __decorate([
        (0, common_1.Injectable)()
    ], ProductsService);
    return ProductsService;
}());
exports.ProductsService = ProductsService;
