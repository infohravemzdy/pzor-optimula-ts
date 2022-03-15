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
exports.TimesheetsPlanConSpec = exports.TimesheetsPlanConProv = void 0;
var hravemzdy_procezor_1 = require("hravemzdy.procezor");
var hravemzdy_procezor_2 = require("hravemzdy.procezor");
var hravemzdy_procezor_3 = require("hravemzdy.procezor");
var ConceptsCode_1 = require("../registry_constants/ConceptsCode");
var result_1 = require("@badrap/result");
var targets_1 = require("./targets");
var results_1 = require("./results");
var concepts_1 = require("./concepts");
// TimesheetsPlan		TIMESHEETS_PLAN
var TimesheetsPlanConProv = /** @class */ (function (_super) {
    __extends(TimesheetsPlanConProv, _super);
    function TimesheetsPlanConProv() {
        return _super.call(this, hravemzdy_procezor_2.ConceptCode.get(TimesheetsPlanConProv.CONCEPT_CODE)) || this;
    }
    TimesheetsPlanConProv.prototype.GetSpec = function (period, version) {
        return new TimesheetsPlanConSpec(this.Code());
    };
    TimesheetsPlanConProv.CONCEPT_CODE = ConceptsCode_1.OptimulaConceptConst.CONCEPT_TIMESHEETS_PLAN;
    return TimesheetsPlanConProv;
}(hravemzdy_procezor_1.ConceptSpecProvider));
exports.TimesheetsPlanConProv = TimesheetsPlanConProv;
var TimesheetsPlanConSpec = /** @class */ (function (_super) {
    __extends(TimesheetsPlanConSpec, _super);
    function TimesheetsPlanConSpec(_code) {
        return _super.call(this, _code, Array(), TimesheetsPlanConSpec.ConceptEval) || this;
    }
    TimesheetsPlanConSpec.prototype.defaultTargetList = function (article, period, ruleset, month, contractTerms, positionTerms, targets, vars) {
        var con = hravemzdy_procezor_3.ContractCode.zero();
        var pos = hravemzdy_procezor_3.PositionCode.zero();
        var targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array();
        }
        return Array(new targets_1.TimesheetsPlanTarget(month, con, pos, vars, article, this.Code(), 0, 0));
    };
    TimesheetsPlanConSpec.new = function () {
        return new TimesheetsPlanConSpec(hravemzdy_procezor_2.ConceptCode.get(TimesheetsPlanConProv.CONCEPT_CODE));
    };
    TimesheetsPlanConSpec.ConceptEval = function (target, spec, period, ruleset, results) {
        var resultsValues = new results_1.TimesheetsPlanResult(target, spec, 0, 0, 0, 0);
        return new Array(result_1.Result.ok(resultsValues));
    };
    return TimesheetsPlanConSpec;
}(concepts_1.OptimulaConceptSpec));
exports.TimesheetsPlanConSpec = TimesheetsPlanConSpec;
//# sourceMappingURL=providers.js.map