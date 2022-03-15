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
exports.TimesheetsPlanTarget = void 0;
var concepts_1 = require("./concepts");
// TimesheetsPlan		TIMESHEETS_PLAN
var TimesheetsPlanTarget = /** @class */ (function (_super) {
    __extends(TimesheetsPlanTarget, _super);
    function TimesheetsPlanTarget(monthCode, contract, position, variant, article, concept, targetBasis, basis) {
        var _this = _super.call(this, monthCode, contract, position, variant, article, concept, basis) || this;
        _this.targetBasis = targetBasis;
        return _this;
    }
    TimesheetsPlanTarget.prototype.targetMessage = function () {
        return "Target Basis: ".concat((this.targetBasis));
    };
    return TimesheetsPlanTarget;
}(concepts_1.OptimulaTermTarget));
exports.TimesheetsPlanTarget = TimesheetsPlanTarget;
//# sourceMappingURL=targets.js.map