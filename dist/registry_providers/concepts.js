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
exports.OptimulaTermResult = exports.OptimulaTermTarget = exports.OptimulaConceptSpec = void 0;
var hravemzdy_procezor_1 = require("hravemzdy.procezor");
var hravemzdy_procezor_2 = require("hravemzdy.procezor");
var hravemzdy_procezor_3 = require("hravemzdy.procezor");
var OptimulaConceptSpec = /** @class */ (function (_super) {
    __extends(OptimulaConceptSpec, _super);
    function OptimulaConceptSpec(_code, _path, _result) {
        return _super.call(this, _code, _path, _result) || this;
    }
    return OptimulaConceptSpec;
}(hravemzdy_procezor_3.ConceptSpec));
exports.OptimulaConceptSpec = OptimulaConceptSpec;
var OptimulaTermTarget = /** @class */ (function (_super) {
    __extends(OptimulaTermTarget, _super);
    function OptimulaTermTarget(monthCode, contract, position, variant, article, concept, basis) {
        var _this = _super.call(this, monthCode, contract, position, variant, article, concept) || this;
        _this.basis = basis;
        return _this;
    }
    OptimulaTermTarget.prototype.targetMessage = function () {
        return "Target Basis: ".concat((this.basis));
    };
    return OptimulaTermTarget;
}(hravemzdy_procezor_1.TermTarget));
exports.OptimulaTermTarget = OptimulaTermTarget;
var OptimulaTermResult = /** @class */ (function (_super) {
    __extends(OptimulaTermResult, _super);
    function OptimulaTermResult(target, spec, value, basis) {
        var _this = _super.call(this, target, spec) || this;
        _this.basis = basis;
        _this.value = value;
        return _this;
    }
    OptimulaTermResult.prototype.resultMessage = function () {
        return "Result Value: ".concat((this.value), ", Result Basis: ").concat((this.basis));
    };
    return OptimulaTermResult;
}(hravemzdy_procezor_2.TermResult));
exports.OptimulaTermResult = OptimulaTermResult;
//# sourceMappingURL=concepts.js.map