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
exports.OptimulaConceptFactory = void 0;
var ConceptsCode_1 = require("../registry_constants/ConceptsCode");
var hravemzdy_procezor_1 = require("hravemzdy.procezor");
var providers_1 = require("../registry_providers/providers");
var OptimulaConceptFactory = /** @class */ (function (_super) {
    __extends(OptimulaConceptFactory, _super);
    function OptimulaConceptFactory() {
        var _this = _super.call(this) || this;
        _this.providers = new Map();
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_TIMESHEETS_PLAN, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_TIMESHEETS_WORK, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_TIMEACTUAL_WORK, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_PAYMENT_BASIS, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_PAYMENT_HOURS, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_PAYMENT_FIXED, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_OPTIMUS_BASIS, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_OPTIMUS_HOURS, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_OPTIMUS_FIXED, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_OPTIMUS_NETTO, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_REDUCED_BASIS, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_REDUCED_HOURS, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_REDUCED_FIXED, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_REDUCED_NETTO, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_AGRWORK_HOURS, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_AGRTASK_HOURS, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_ALLOWCE_MFULL, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_ALLOWCE_HFULL, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_ALLOWCE_HOURS, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_ALLOWCE_DAILY, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_ALLDOWN_DAILY, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_OFFWORK_HOURS, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_OFFTASK_HOURS, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_OFFSETS_HFULL, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_OFFSETS_HOURS, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_OFFSETS_DAILY, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_OFFDOWN_DAILY, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_SETTLEM_TARGETS, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_SETTLEM_TARNETT, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_SETTLEM_AGRWORK, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_SETTLEM_AGRTASK, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_SETTLEM_ALLOWCE, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_SETTLEM_ALLNETT, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_SETTLEM_OFFWORK, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_SETTLEM_OFFTASK, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_SETTLEM_OFFSETS, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_SETTLEM_RESULTS, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_SETTLEM_RESNETT, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_INCOMES_TAXFREE, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_INCOMES_TAXBASE, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_INCOMES_TAXWINS, new providers_1.TimesheetsPlanConProv());
        _this.providers.set(ConceptsCode_1.OptimulaConceptConst.CONCEPT_INCOMES_SUMMARY, new providers_1.TimesheetsPlanConProv());
        return _this;
    }
    return OptimulaConceptFactory;
}(hravemzdy_procezor_1.ConceptSpecFactory));
exports.OptimulaConceptFactory = OptimulaConceptFactory;
//# sourceMappingURL=ConceptsFactory.js.map