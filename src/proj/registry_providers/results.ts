import { ArticleCode, IArticleSpec } from "hravemzdy.procezor";
import {ITermTarget} from "hravemzdy.procezor";
import {OptimulaTermResult} from "./concepts";

// TimesheetsPlan		TIMESHEETS_PLAN
export class TimesheetsPlanResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        fullSheetHrsVal: number,
        value: number, basis: number) {
        super(target, spec, value, basis);
        this.FullSheetHrsVal = fullSheetHrsVal;
    }
    FullSheetHrsVal: number;

    resultMessage(): string {
        return `Result: ${this.FullSheetHrsVal}`;

    }
}

// TimesheetsWork		TIMESHEETS_WORK
export class TimesheetsWorkResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        timeSheetHrsVal: number, holiSheetHrsVal: number,
        value: number, basis: number) {
        super(target, spec, value, basis);
        this.TimeSheetHrsVal = timeSheetHrsVal;
        this.HoliSheetHrsVal = holiSheetHrsVal;
    }
    TimeSheetHrsVal: number;
    HoliSheetHrsVal: number;

    resultMessage(): string {
        const timeSheetHrsVal = this.TimeSheetHrsVal;
        const holiSheetHrsVal = this.HoliSheetHrsVal;
        return `Result: ${timeSheetHrsVal}, Result: ${holiSheetHrsVal}`;

    }
}

// TimeactualWork		TIMEACTUAL_WORK
export class TimeactualWorkResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        workSheetHrsVal: number, workSheetDayVal: number, overSheetHrsVal: number,
        value: number, basis: number) {
        super(target, spec, value, basis);
        this.WorkSheetHrsVal = workSheetHrsVal;
        this.WorkSheetDayVal = workSheetDayVal;
        this.OverSheetHrsVal = overSheetHrsVal;
    }
    WorkSheetHrsVal: number;
    WorkSheetDayVal: number;
    OverSheetHrsVal: number;

    resultMessage(): string {
        const workSheetHrsVal = this.WorkSheetHrsVal;
        const workSheetDayVal = this.WorkSheetDayVal;
        const overSheetHrsVal = this.OverSheetHrsVal;
        return `Result: ${workSheetHrsVal}, Result: ${workSheetDayVal}, Result: ${overSheetHrsVal}`;

    }
}

// PaymentBasis		PAYMENT_BASIS
export class PaymentBasisResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        paymentBasisVal: number,
        value: number, basis: number) {
        super(target, spec, value, basis);
        this.PaymentBasisVal = paymentBasisVal;
    }
    PaymentBasisVal: number;

    resultMessage(): string {
        return `Result: ${this.PaymentBasisVal}`;

    }
}

// PaymentHours		PAYMENT_HOURS
export class PaymentHoursResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        paymentBasisVal: number, paymentHoursVal: number,
        value: number, basis: number) {
        super(target, spec, value, basis);
        this.PaymentBasisVal = paymentBasisVal;
        this.PaymentHoursVal = paymentHoursVal;
    }
    PaymentBasisVal: number;
    PaymentHoursVal: number;

    resultMessage(): string {
        const paymentBasisVal = this.PaymentBasisVal;
        const paymentHoursVal = this.PaymentHoursVal;
        return `Result: ${paymentBasisVal}, Result: ${paymentHoursVal}`;

    }
}

// PaymentFixed		PAYMENT_FIXED
export class PaymentFixedResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        paymentBasisVal: number,
        value: number, basis: number) {
        super(target, spec, value, basis);
        this.PaymentBasisVal = paymentBasisVal;
    }
    PaymentBasisVal: number;

    resultMessage(): string {
        return `Result: ${this.PaymentBasisVal}`;

    }
}

// OptimusBasis		OPTIMUS_BASIS
export class OptimusBasisResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        optimusBasisVal: number,
        value: number, basis: number) {
        super(target, spec, value, basis);
        this.OptimusBasisVal = optimusBasisVal;
    }
    OptimusBasisVal: number;

    resultMessage(): string {
        return `Result: ${this.OptimusBasisVal}`;

    }
}

// OptimusHours		OPTIMUS_HOURS
export class OptimusHoursResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        optimusBasisVal: number, optimusHoursVal: number,
        value: number, basis: number) {
        super(target, spec, value, basis);
        this.OptimusBasisVal = optimusBasisVal;
        this.OptimusHoursVal = optimusHoursVal;
    }
    OptimusBasisVal: number;
    OptimusHoursVal: number;

    resultMessage(): string {
        const optimusBasisVal = this.OptimusBasisVal;
        const optimusHoursVal = this.OptimusHoursVal;
        return `Result: ${optimusBasisVal}, Result: ${optimusHoursVal}`;

    }
}

// OptimusFixed		OPTIMUS_FIXED
export class OptimusFixedResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        optimusBasisVal: number,
        value: number, basis: number) {
        super(target, spec, value, basis);
        this.OptimusBasisVal = optimusBasisVal;
    }
    OptimusBasisVal: number;

    resultMessage(): string {
        return `Result: ${this.OptimusBasisVal}`;

    }
}

// OptimusNetto		OPTIMUS_NETTO
export class OptimusNettoResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        optimusBasisVal: number, optimusExtraVal: number,
        value: number, basis: number) {
        super(target, spec, value, basis);
        this.OptimusBasisVal = optimusBasisVal;
        this.OptimusExtraVal = optimusExtraVal;
    }
    OptimusBasisVal: number;
    OptimusExtraVal: number;

    resultMessage(): string {
        const optimusBasisVal = this.OptimusBasisVal;
        const optimusExtraVal = this.OptimusExtraVal;
        return `Result: ${optimusBasisVal}, Result: ${optimusExtraVal}`;

    }
}

// ReducedBasis		REDUCED_BASIS
export class ReducedBasisResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        articleTarget: ArticleCode,
        value: number, basis: number) {
        super(target, spec, value, basis);
        this.ArticleTarget = articleTarget;
    }
    ArticleTarget: ArticleCode;

    resultMessage(): string {
        return `Result: ${this.ArticleTarget}`;

    }
}

// ReducedHours		REDUCED_HOURS
export class ReducedHoursResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        articleTarget: ArticleCode,
        value: number, basis: number) {
        super(target, spec, value, basis);
        this.ArticleTarget = articleTarget;
    }
    ArticleTarget: ArticleCode;

    resultMessage(): string {
        return `Result: ${this.ArticleTarget}`;

    }
}

// ReducedFixed		REDUCED_FIXED
export class ReducedFixedResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        articleTarget: ArticleCode,
        value: number, basis: number) {
        super(target, spec, value, basis);
        this.ArticleTarget = articleTarget;
    }
    ArticleTarget: ArticleCode;

    resultMessage(): string {
        return `Result: ${this.ArticleTarget}`;

    }
}

// ReducedNetto		REDUCED_NETTO
export class ReducedNettoResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        articleTarget: ArticleCode,
        value: number, basis: number) {
        super(target, spec, value, basis);
        this.ArticleTarget = articleTarget;
    }
    ArticleTarget: ArticleCode;

    resultMessage(): string {
        return `Result: ${this.ArticleTarget}`;

    }
}

// AgrworkHours		AGRWORK_HOURS
export class AgrworkHoursResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        agrWorkTarifVal: number, agrWorkRatioVal: number, agrWorkLimitVal: number, agrHourLimitVal: number,
        value: number, basis: number) {
        super(target, spec, value, basis);
        this.AgrWorkTarifVal = agrWorkTarifVal;
        this.AgrWorkRatioVal = agrWorkRatioVal;
        this.AgrWorkLimitVal = agrWorkLimitVal;
        this.AgrHourLimitVal = agrHourLimitVal;
    }
    AgrWorkTarifVal: number;
    AgrWorkRatioVal: number;
    AgrWorkLimitVal: number;
    AgrHourLimitVal: number;

    resultMessage(): string {
        const agrWorkTarifVal = this.AgrWorkTarifVal;
        const agrWorkRatioVal = this.AgrWorkRatioVal;
        const agrWorkLimitVal = this.AgrWorkLimitVal;
        const agrHourLimitVal = this.AgrHourLimitVal;
        return `Result: ${agrWorkTarifVal}, Result: ${agrWorkRatioVal}, Result: ${agrWorkLimitVal}, Result: ${agrHourLimitVal}`;

    }
}

// AgrtaskHours		AGRTASK_HOURS
export class AgrtaskHoursResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        agrWorkTarifVal: number, agrWorkRatioVal: number, agrWorkLimitVal: number, agrHourLimitVal: number,
        value: number, basis: number) {
        super(target, spec, value, basis);
        this.AgrWorkTarifVal = agrWorkTarifVal;
        this.AgrWorkRatioVal = agrWorkRatioVal;
        this.AgrWorkLimitVal = agrWorkLimitVal;
        this.AgrHourLimitVal = agrHourLimitVal;
    }
    AgrWorkTarifVal: number;
    AgrWorkRatioVal: number;
    AgrWorkLimitVal: number;
    AgrHourLimitVal: number;

    resultMessage(): string {
        const agrWorkTarifVal = this.AgrWorkTarifVal;
        const agrWorkRatioVal = this.AgrWorkRatioVal;
        const agrWorkLimitVal = this.AgrWorkLimitVal;
        const agrHourLimitVal = this.AgrHourLimitVal;
        return `Result: ${agrWorkTarifVal}, Result: ${agrWorkRatioVal}, Result: ${agrWorkLimitVal}, Result: ${agrHourLimitVal}`;

    }
}

// AllowceMfull		ALLOWCE_MFULL
export class AllowceMfullResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        allowceBasisVal: number,
        value: number, basis: number) {
        super(target, spec, value, basis);
        this.AllowceBasisVal = allowceBasisVal;
    }
    AllowceBasisVal: number;

    resultMessage(): string {
        return `Result: ${this.AllowceBasisVal}`;

    }
}

// AllowceHfull		ALLOWCE_HFULL
export class AllowceHfullResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        allowceTarifVal: number, allowceHfullVal: number,
        value: number, basis: number) {
        super(target, spec, value, basis);
        this.AllowceTarifVal = allowceTarifVal;
        this.AllowceHfullVal = allowceHfullVal;
    }
    AllowceTarifVal: number;
    AllowceHfullVal: number;

    resultMessage(): string {
        const allowceTarifVal = this.AllowceTarifVal;
        const allowceHfullVal = this.AllowceHfullVal;
        return `Result: ${allowceTarifVal}, Result: ${allowceHfullVal}`;

    }
}

// AllowceHours		ALLOWCE_HOURS
export class AllowceHoursResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        allowceTarifVal: number,
        value: number, basis: number) {
        super(target, spec, value, basis);
        this.AllowceTarifVal = allowceTarifVal;
    }
    AllowceTarifVal: number;

    resultMessage(): string {
        return `Result: ${this.AllowceTarifVal}`;

    }
}

// AllowceDaily		ALLOWCE_DAILY
export class AllowceDailyResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        allowceDailyVal: number,
        value: number, basis: number) {
        super(target, spec, value, basis);
        this.AllowceDailyVal = allowceDailyVal;
    }
    AllowceDailyVal: number;

    resultMessage(): string {
        return `Result: ${this.AllowceDailyVal}`;

    }
}

// AlldownDaily		ALLDOWN_DAILY
export class AlldownDailyResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        allowceDailyVal: number,
        value: number, basis: number) {
        super(target, spec, value, basis);
        this.AllowceDailyVal = allowceDailyVal;
    }
    AllowceDailyVal: number;

    resultMessage(): string {
        return `Result: ${this.AllowceDailyVal}`;

    }
}

// OffworkHours		OFFWORK_HOURS
export class OffworkHoursResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        agrWorkTarifVal: number, agrWorkRatioVal: number, agrWorkLimitVal: number, agrHourLimitVal: number,
        value: number, basis: number) {
        super(target, spec, value, basis);
        this.AgrWorkTarifVal = agrWorkTarifVal;
        this.AgrWorkRatioVal = agrWorkRatioVal;
        this.AgrWorkLimitVal = agrWorkLimitVal;
        this.AgrHourLimitVal = agrHourLimitVal;
    }
    AgrWorkTarifVal: number;
    AgrWorkRatioVal: number;
    AgrWorkLimitVal: number;
    AgrHourLimitVal: number;

    resultMessage(): string {
        const agrWorkTarifVal = this.AgrWorkTarifVal;
        const agrWorkRatioVal = this.AgrWorkRatioVal;
        const agrWorkLimitVal = this.AgrWorkLimitVal;
        const agrHourLimitVal = this.AgrHourLimitVal;
        return `Result: ${agrWorkTarifVal}, Result: ${agrWorkRatioVal}, Result: ${agrWorkLimitVal}, Result: ${agrHourLimitVal}`;

    }
}

// OfftaskHours		OFFTASK_HOURS
export class OfftaskHoursResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        agrWorkTarifVal: number, agrWorkRatioVal: number, agrWorkLimitVal: number, agrHourLimitVal: number,
        value: number, basis: number) {
        super(target, spec, value, basis);
        this.AgrWorkTarifVal = agrWorkTarifVal;
        this.AgrWorkRatioVal = agrWorkRatioVal;
        this.AgrWorkLimitVal = agrWorkLimitVal;
        this.AgrHourLimitVal = agrHourLimitVal;
    }
    AgrWorkTarifVal: number;
    AgrWorkRatioVal: number;
    AgrWorkLimitVal: number;
    AgrHourLimitVal: number;

    resultMessage(): string {
        const agrWorkTarifVal = this.AgrWorkTarifVal;
        const agrWorkRatioVal = this.AgrWorkRatioVal;
        const agrWorkLimitVal = this.AgrWorkLimitVal;
        const agrHourLimitVal = this.AgrHourLimitVal;
        return `Result: ${agrWorkTarifVal}, Result: ${agrWorkRatioVal}, Result: ${agrWorkLimitVal}, Result: ${agrHourLimitVal}`;

    }
}

// OffsetsHfull		OFFSETS_HFULL
export class OffsetsHfullResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        allowceTarifVal: number, allowceHfullVal: number,
        value: number, basis: number) {
        super(target, spec, value, basis);
        this.AllowceTarifVal = allowceTarifVal;
        this.AllowceHfullVal = allowceHfullVal;
    }
    AllowceTarifVal: number;
    AllowceHfullVal: number;

    resultMessage(): string {
        const allowceTarifVal = this.AllowceTarifVal;
        const allowceHfullVal = this.AllowceHfullVal;
        return `Result: ${allowceTarifVal}, Result: ${allowceHfullVal}`;

    }
}

// OffsetsHours		OFFSETS_HOURS
export class OffsetsHoursResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        allowceTarifVal: number,
        value: number, basis: number) {
        super(target, spec, value, basis);
        this.AllowceTarifVal = allowceTarifVal;
    }
    AllowceTarifVal: number;

    resultMessage(): string {
        return `Result: ${this.AllowceTarifVal}`;

    }
}

// OffsetsDaily		OFFSETS_DAILY
export class OffsetsDailyResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        allowceDailyVal: number,
        value: number, basis: number) {
        super(target, spec, value, basis);
        this.AllowceDailyVal = allowceDailyVal;
    }
    AllowceDailyVal: number;

    resultMessage(): string {
        return `Result: ${this.AllowceDailyVal}`;

    }
}

// OffdownDaily		OFFDOWN_DAILY
export class OffdownDailyResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        allowceDailyVal: number,
        value: number, basis: number) {
        super(target, spec, value, basis);
        this.AllowceDailyVal = allowceDailyVal;
    }
    AllowceDailyVal: number;

    resultMessage(): string {
        return `Result: ${this.AllowceDailyVal}`;

    }
}

// SettlemTargets		SETTLEM_TARGETS
export class SettlemTargetsResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        value: number, basis: number) {
        super(target, spec, value, basis);
    }

    resultMessage(): string {
        return `Value: ${this.ResultValue}; Basis: ${this.ResultBasis}`;
    }
}

// SettlemTarnett		SETTLEM_TARNETT
export class SettlemTarnettResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        value: number, basis: number) {
        super(target, spec, value, basis);
    }

    resultMessage(): string {
        return `Value: ${this.ResultValue}; Basis: ${this.ResultBasis}`;
    }
}

// SettlemAgrwork		SETTLEM_AGRWORK
export class SettlemAgrworkResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        value: number, basis: number) {
        super(target, spec, value, basis);
    }

    resultMessage(): string {
        return `Value: ${this.ResultValue}; Basis: ${this.ResultBasis}`;
    }
}

// SettlemAgrtask		SETTLEM_AGRTASK
export class SettlemAgrtaskResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        value: number, basis: number) {
        super(target, spec, value, basis);
    }

    resultMessage(): string {
        return `Value: ${this.ResultValue}; Basis: ${this.ResultBasis}`;
    }
}

// SettlemAllowce		SETTLEM_ALLOWCE
export class SettlemAllowceResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        value: number, basis: number) {
        super(target, spec, value, basis);
    }

    resultMessage(): string {
        return `Value: ${this.ResultValue}; Basis: ${this.ResultBasis}`;
    }
}

// SettlemAllnett		SETTLEM_ALLNETT
export class SettlemAllnettResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        value: number, basis: number) {
        super(target, spec, value, basis);
    }

    resultMessage(): string {
        return `Value: ${this.ResultValue}; Basis: ${this.ResultBasis}`;
    }
}

// SettlemOffwork		SETTLEM_OFFWORK
export class SettlemOffworkResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        value: number, basis: number) {
        super(target, spec, value, basis);
    }

    resultMessage(): string {
        return `Value: ${this.ResultValue}; Basis: ${this.ResultBasis}`;
    }
}

// SettlemOfftask		SETTLEM_OFFTASK
export class SettlemOfftaskResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        value: number, basis: number) {
        super(target, spec, value, basis);
    }

    resultMessage(): string {
        return `Value: ${this.ResultValue}; Basis: ${this.ResultBasis}`;
    }
}

// SettlemOffsets		SETTLEM_OFFSETS
export class SettlemOffsetsResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        value: number, basis: number) {
        super(target, spec, value, basis);
    }

    resultMessage(): string {
        return `Value: ${this.ResultValue}; Basis: ${this.ResultBasis}`;
    }
}

// SettlemResults		SETTLEM_RESULTS
export class SettlemResultsResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        value: number, basis: number) {
        super(target, spec, value, basis);
    }

    resultMessage(): string {
        return `Value: ${this.ResultValue}; Basis: ${this.ResultBasis}`;
    }
}

// SettlemResnett		SETTLEM_RESNETT
export class SettlemResnettResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        value: number, basis: number) {
        super(target, spec, value, basis);
    }

    resultMessage(): string {
        return `Value: ${this.ResultValue}; Basis: ${this.ResultBasis}`;
    }
}

// IncomesTaxfree		INCOMES_TAXFREE
export class IncomesTaxfreeResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        value: number, basis: number) {
        super(target, spec, value, basis);
    }

    resultMessage(): string {
        return `Value: ${this.ResultValue}; Basis: ${this.ResultBasis}`;
    }
}

// IncomesTaxbase		INCOMES_TAXBASE
export class IncomesTaxbaseResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        value: number, basis: number) {
        super(target, spec, value, basis);
    }

    resultMessage(): string {
        return `Value: ${this.ResultValue}; Basis: ${this.ResultBasis}`;
    }
}

// IncomesTaxwins		INCOMES_TAXWINS
export class IncomesTaxwinsResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        value: number, basis: number) {
        super(target, spec, value, basis);
    }

    resultMessage(): string {
        return `Value: ${this.ResultValue}; Basis: ${this.ResultBasis}`;
    }
}

// IncomesSummary		INCOMES_SUMMARY
export class IncomesSummaryResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
        value: number, basis: number) {
        super(target, spec, value, basis);
    }

    resultMessage(): string {
        return `Value: ${this.ResultValue}; Basis: ${this.ResultBasis}`;
    }
}

