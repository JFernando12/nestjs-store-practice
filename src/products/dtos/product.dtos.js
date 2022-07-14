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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UpdateProductDto = exports.CreateProductDto = void 0;
var class_validator_1 = require("class-validator");
var mapped_types_1 = require("@nestjs/mapped-types");
var CreateProductDto = /** @class */ (function () {
    function CreateProductDto() {
    }
    __decorate([
        (0, class_validator_1.IsString)({ message: "Todo mal" }),
        (0, class_validator_1.IsNotEmpty)()
    ], CreateProductDto.prototype, "name");
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)()
    ], CreateProductDto.prototype, "description");
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsPositive)()
    ], CreateProductDto.prototype, "price");
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsPositive)()
    ], CreateProductDto.prototype, "stock");
    __decorate([
        (0, class_validator_1.IsUrl)(),
        (0, class_validator_1.IsNotEmpty)()
    ], CreateProductDto.prototype, "image");
    return CreateProductDto;
}());
exports.CreateProductDto = CreateProductDto;
var UpdateProductDto = /** @class */ (function (_super) {
    __extends(UpdateProductDto, _super);
    function UpdateProductDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdateProductDto;
}((0, mapped_types_1.PartialType)(CreateProductDto)));
exports.UpdateProductDto = UpdateProductDto;
