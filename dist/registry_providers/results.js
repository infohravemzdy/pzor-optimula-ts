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
exports.TimesheetsPlanResult = void 0;
var concepts_1 = require("./concepts");
// TimesheetsPlan		TIMESHEETS_PLAN
var TimesheetsPlanResult = /** @class */ (function (_super) {
    __extends(TimesheetsPlanResult, _super);
    function TimesheetsPlanResult(target, spec, resultValue, resultBasis, value, basis) {
        var _this = _super.call(this, target, spec, basis, value) || this;
        _this.resultValue = resultValue;
        _this.resultBasis = resultBasis;
        return _this;
    }
    TimesheetsPlanResult.prototype.resultMessage = function () {
        return "Result Value: ".concat((this.resultValue), ", Result Value: ").concat((this.resultBasis));
    };
    return TimesheetsPlanResult;
}(concepts_1.OptimulaTermResult));
exports.TimesheetsPlanResult = TimesheetsPlanResult;
//# sourceMappingURL=results.js.map