import {IArticleSpec} from "hravemzdy.procezor";
import {ITermTarget} from "hravemzdy.procezor";
import {OptimulaTermResult} from "./concepts";

// TimesheetsPlan		TIMESHEETS_PLAN
export class TimesheetsPlanResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// TimesheetsWork		TIMESHEETS_WORK
export class TimesheetsWorkResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// TimeactualWork		TIMEACTUAL_WORK
export class TimeactualWorkResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// PaymentBasis		PAYMENT_BASIS
export class PaymentBasisResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// PaymentHours		PAYMENT_HOURS
export class PaymentHoursResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// PaymentFixed		PAYMENT_FIXED
export class PaymentFixedResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// OptimusBasis		OPTIMUS_BASIS
export class OptimusBasisResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// OptimusHours		OPTIMUS_HOURS
export class OptimusHoursResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// OptimusFixed		OPTIMUS_FIXED
export class OptimusFixedResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// OptimusNetto		OPTIMUS_NETTO
export class OptimusNettoResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// ReducedBasis		REDUCED_BASIS
export class ReducedBasisResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// ReducedHours		REDUCED_HOURS
export class ReducedHoursResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// ReducedFixed		REDUCED_FIXED
export class ReducedFixedResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// ReducedNetto		REDUCED_NETTO
export class ReducedNettoResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// AgrworkHours		AGRWORK_HOURS
export class AgrworkHoursResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// AgrtaskHours		AGRTASK_HOURS
export class AgrtaskHoursResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// AllowceMfull		ALLOWCE_MFULL
export class AllowceMfullResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// AllowceHfull		ALLOWCE_HFULL
export class AllowceHfullResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// AllowceHours		ALLOWCE_HOURS
export class AllowceHoursResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// AllowceDaily		ALLOWCE_DAILY
export class AllowceDailyResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// AlldownDaily		ALLDOWN_DAILY
export class AlldownDailyResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// OffworkHours		OFFWORK_HOURS
export class OffworkHoursResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// OfftaskHours		OFFTASK_HOURS
export class OfftaskHoursResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// OffsetsHfull		OFFSETS_HFULL
export class OffsetsHfullResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// OffsetsHours		OFFSETS_HOURS
export class OffsetsHoursResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// OffsetsDaily		OFFSETS_DAILY
export class OffsetsDailyResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// OffdownDaily		OFFDOWN_DAILY
export class OffdownDailyResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// SettlemTargets		SETTLEM_TARGETS
export class SettlemTargetsResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// SettlemTarnett		SETTLEM_TARNETT
export class SettlemTarnettResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// SettlemAgrwork		SETTLEM_AGRWORK
export class SettlemAgrworkResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// SettlemAgrtask		SETTLEM_AGRTASK
export class SettlemAgrtaskResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// SettlemAllowce		SETTLEM_ALLOWCE
export class SettlemAllowceResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// SettlemAllnett		SETTLEM_ALLNETT
export class SettlemAllnettResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// SettlemOffwork		SETTLEM_OFFWORK
export class SettlemOffworkResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// SettlemOfftask		SETTLEM_OFFTASK
export class SettlemOfftaskResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// SettlemOffsets		SETTLEM_OFFSETS
export class SettlemOffsetsResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// SettlemResults		SETTLEM_RESULTS
export class SettlemResultsResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// SettlemResnett		SETTLEM_RESNETT
export class SettlemResnettResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// IncomesTaxfree		INCOMES_TAXFREE
export class IncomesTaxfreeResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// IncomesTaxbase		INCOMES_TAXBASE
export class IncomesTaxbaseResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// IncomesTaxwins		INCOMES_TAXWINS
export class IncomesTaxwinsResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

// IncomesSummary		INCOMES_SUMMARY
export class IncomesSummaryResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number) {
        super(target, spec, 0, 0);
        this.resultValue = resultValue;
    }
    resultValue: number;
    resultMessage(): string {
        return `Result Value: ${this.resultValue}`
    }
}

