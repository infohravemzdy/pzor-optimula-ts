import {OptimulaConceptConst} from "../registry_constants/ConceptsCode";
import {CODE, ConceptSpecFactory, IConceptSpecProvider} from "hravemzdy.procezor";
import {
    AgrtaskHoursConProv,
    AgrworkHoursConProv,
    AlldownDailyConProv,
    AllowceDailyConProv,
    AllowceHfullConProv,
    AllowceHoursConProv,
    AllowceMfullConProv,
    IncomesSummaryConProv,
    IncomesTaxbaseConProv,
    IncomesTaxfreeConProv,
    IncomesTaxwinsConProv,
    OffdownDailyConProv,
    OffsetsDailyConProv,
    OffsetsHfullConProv,
    OffsetsHoursConProv,
    OfftaskHoursConProv,
    OffworkHoursConProv,
    OptimusBasisConProv,
    OptimusFixedConProv,
    OptimusHoursConProv,
    OptimusNettoConProv,
    PaymentBasisConProv,
    PaymentFixedConProv,
    PaymentHoursConProv,
    ReducedBasisConProv,
    ReducedFixedConProv,
    ReducedHoursConProv,
    ReducedNettoConProv,
    SettlemAgrtaskConProv,
    SettlemAgrworkConProv,
    SettlemAllnettConProv,
    SettlemAllowceConProv,
    SettlemOffsetsConProv,
    SettlemOfftaskConProv,
    SettlemOffworkConProv,
    SettlemResnettConProv,
    SettlemResultsConProv,
    SettlemTargetsConProv,
    SettlemTarnettConProv,
    TimeactualWorkConProv,
    TimesheetsPlanConProv,
    TimesheetsWorkConProv
} from "../registry_providers/providers";

export class OptimulaConceptFactory extends ConceptSpecFactory {
    override providers: Map<CODE, IConceptSpecProvider> = new Map<CODE, IConceptSpecProvider>();

    constructor() {
        super();
        this.providers.set(OptimulaConceptConst.CONCEPT_TIMESHEETS_PLAN, new TimesheetsPlanConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_TIMESHEETS_WORK, new TimesheetsWorkConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_TIMEACTUAL_WORK, new TimeactualWorkConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_PAYMENT_BASIS, new PaymentBasisConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_PAYMENT_HOURS, new PaymentHoursConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_PAYMENT_FIXED, new PaymentFixedConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_OPTIMUS_BASIS, new OptimusBasisConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_OPTIMUS_HOURS, new OptimusHoursConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_OPTIMUS_FIXED, new OptimusFixedConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_OPTIMUS_NETTO, new OptimusNettoConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_REDUCED_BASIS, new ReducedBasisConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_REDUCED_HOURS, new ReducedHoursConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_REDUCED_FIXED, new ReducedFixedConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_REDUCED_NETTO, new ReducedNettoConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_AGRWORK_HOURS, new AgrworkHoursConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_AGRTASK_HOURS, new AgrtaskHoursConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_ALLOWCE_MFULL, new AllowceMfullConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_ALLOWCE_HFULL, new AllowceHfullConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_ALLOWCE_HOURS, new AllowceHoursConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_ALLOWCE_DAILY, new AllowceDailyConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_ALLDOWN_DAILY, new AlldownDailyConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_OFFWORK_HOURS, new OffworkHoursConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_OFFTASK_HOURS, new OfftaskHoursConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_OFFSETS_HFULL, new OffsetsHfullConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_OFFSETS_HOURS, new OffsetsHoursConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_OFFSETS_DAILY, new OffsetsDailyConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_OFFDOWN_DAILY, new OffdownDailyConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_SETTLEM_TARGETS, new SettlemTargetsConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_SETTLEM_TARNETT, new SettlemTarnettConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_SETTLEM_AGRWORK, new SettlemAgrworkConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_SETTLEM_AGRTASK, new SettlemAgrtaskConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_SETTLEM_ALLOWCE, new SettlemAllowceConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_SETTLEM_ALLNETT, new SettlemAllnettConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_SETTLEM_OFFWORK, new SettlemOffworkConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_SETTLEM_OFFTASK, new SettlemOfftaskConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_SETTLEM_OFFSETS, new SettlemOffsetsConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_SETTLEM_RESULTS, new SettlemResultsConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_SETTLEM_RESNETT, new SettlemResnettConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_INCOMES_TAXFREE, new IncomesTaxfreeConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_INCOMES_TAXBASE, new IncomesTaxbaseConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_INCOMES_TAXWINS, new IncomesTaxwinsConProv());
        this.providers.set(OptimulaConceptConst.CONCEPT_INCOMES_SUMMARY, new IncomesSummaryConProv());
    }
}