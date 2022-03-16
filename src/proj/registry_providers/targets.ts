import {ConceptCode} from "hravemzdy.procezor";
import {ArticleCode} from "hravemzdy.procezor";
import {VariantCode} from "hravemzdy.procezor";
import {MonthCode} from "hravemzdy.procezor";
import {ContractCode, PositionCode} from "hravemzdy.procezor";
import {OptimulaTermTarget} from "./concepts";
import { OperationsDec } from "hravemzdy.legalios";
import bigDecimal = require("js-big-decimal");
import { NameOfArticle } from "../registry_constants/ArticlesConst";

// TimesheetsPlan		TIMESHEETS_PLAN
export class TimesheetsPlanTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode,
                fullSheetHrsVal: number) {
        super(monthCode, contract, position, variant, article, concept, 0);
        this.FullSheetHrsVal = fullSheetHrsVal;
    }
    FullSheetHrsVal: number;
    targetMessage(): string {
        return `Basis: ${this.FullSheetHrsVal}`;
    }
}

// TimesheetsWork		TIMESHEETS_WORK
export class TimesheetsWorkTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode,
                timeSheetHrsVal: number, holiSheetHrsVal: number) {
        super(monthCode, contract, position, variant, article, concept, 0);
        this.TimeSheetHrsVal = timeSheetHrsVal;
        this.HoliSheetHrsVal = holiSheetHrsVal;
    }
    TimeSheetHrsVal: number;
    HoliSheetHrsVal: number;
    targetMessage(): string {
        const timeSheetHrsVal = OperationsDec.divide(new bigDecimal(this.TimeSheetHrsVal), OptimulaTermTarget.BIG_SIXTY);
        const holiSheetHrsVal = OperationsDec.divide(new bigDecimal(this.HoliSheetHrsVal), OptimulaTermTarget.BIG_SIXTY);
        return `Basis: ${this.TargetBasis}, Time Hours: ${timeSheetHrsVal}, Holi Hours: ${holiSheetHrsVal}`;
    }
}

// TimeactualWork		TIMEACTUAL_WORK
export class TimeactualWorkTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode,
                workSheetHrsVal: number, workSheetDayVal: number, overSheetHrsVal: number) {
        super(monthCode, contract, position, variant, article, concept, 0);
        this.WorkSheetHrsVal = workSheetHrsVal;
        this.WorkSheetDayVal = workSheetDayVal;
        this.OverSheetHrsVal = overSheetHrsVal;
    }
    WorkSheetHrsVal: number;
    WorkSheetDayVal: number;
    OverSheetHrsVal: number;
    targetMessage(): string {
        const workSheetHrsVal = OperationsDec.divide(new bigDecimal(this.WorkSheetHrsVal), OptimulaTermTarget.BIG_SIXTY);
        const workSheetDayVal = OperationsDec.divide(new bigDecimal(this.WorkSheetDayVal), OptimulaTermTarget.BIG_100);
        const overSheetHrsVal = OperationsDec.divide(new bigDecimal(this.OverSheetHrsVal), OptimulaTermTarget.BIG_100);
        return `Basis: ${this.TargetBasis}, Work Hours: ${workSheetHrsVal}, Work Days: ${workSheetDayVal}, Over Hours: ${overSheetHrsVal}`;
    }
}

// PaymentBasis		PAYMENT_BASIS
export class PaymentBasisTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode,
                paymentBasisVal: number) {
        super(monthCode, contract, position, variant, article, concept, 0);
        this.PaymentBasisVal = paymentBasisVal;
    }
    PaymentBasisVal: number;
    targetMessage(): string {
        return `Basis: ${this.TargetBasis}, Target Basis: ${OperationsDec.divide(new bigDecimal(this.PaymentBasisVal), OptimulaTermTarget.BIG_100)}`;
    }
}

// PaymentHours		PAYMENT_HOURS
export class PaymentHoursTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode,
                paymentBasisVal: number, paymentHoursVal: number) {
        super(monthCode, contract, position, variant, article, concept, 0);
        this.PaymentBasisVal = paymentBasisVal;
        this.PaymentHoursVal = paymentHoursVal;
    }
    PaymentBasisVal: number;
    PaymentHoursVal: number;
    targetMessage(): string {
        const paymentBasisVal = OperationsDec.divide(new bigDecimal(this.PaymentBasisVal), OptimulaTermTarget.BIG_100);
        const paymentHoursVal = OperationsDec.divide(new bigDecimal(this.PaymentHoursVal), OptimulaTermTarget.BIG_SIXTY);
        return `Basis: ${this.TargetBasis}, Target Basis: ${paymentBasisVal}, Target Hours: ${paymentHoursVal}`;
    }
}

// PaymentFixed		PAYMENT_FIXED
export class PaymentFixedTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode,
                paymentBasisVal: number) {
        super(monthCode, contract, position, variant, article, concept, 0);
        this.PaymentBasisVal = paymentBasisVal;
    }
    PaymentBasisVal: number;
    targetMessage(): string {
        return `Basis: ${this.TargetBasis}, Target Basis: ${OperationsDec.divide(new bigDecimal(this.PaymentBasisVal), OptimulaTermTarget.BIG_100)}`;
    }
}

// OptimusBasis		OPTIMUS_BASIS
export class OptimusBasisTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode,
                optimusBasisVal: number) {
        super(monthCode, contract, position, variant, article, concept, 0);
        this.OptimusBasisVal = optimusBasisVal;
    }
    OptimusBasisVal: number;
    targetMessage(): string {
        return `Basis: ${this.TargetBasis}, Target Basis: ${OperationsDec.divide(new bigDecimal(this.OptimusBasisVal), OptimulaTermTarget.BIG_100)}`;
    }
}

// OptimusHours		OPTIMUS_HOURS
export class OptimusHoursTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode,
                optimusBasisVal: number, optimusHoursVal: number) {
        super(monthCode, contract, position, variant, article, concept, 0);
        this.OptimusBasisVal = optimusBasisVal;
        this.OptimusHoursVal = optimusHoursVal;
    }
    OptimusBasisVal: number;
    OptimusHoursVal: number;
    targetMessage(): string {
        const optimusBasisVal = OperationsDec.divide(new bigDecimal(this.OptimusBasisVal), OptimulaTermTarget.BIG_100);
        const optimusHoursVal = OperationsDec.divide(new bigDecimal(this.OptimusHoursVal), OptimulaTermTarget.BIG_SIXTY);
        return `Basis: ${this.TargetBasis}, Target Basis: ${optimusBasisVal}, Target Hours: ${optimusHoursVal}`;
    }
}

// OptimusFixed		OPTIMUS_FIXED
export class OptimusFixedTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode,
                optimusBasisVal: number) {
        super(monthCode, contract, position, variant, article, concept, 0);
        this.OptimusBasisVal = optimusBasisVal;
    }
    OptimusBasisVal: number;
    targetMessage(): string {
        return `Basis: ${this.TargetBasis}, Target Basis: ${OperationsDec.divide(new bigDecimal(this.OptimusBasisVal), OptimulaTermTarget.BIG_100)}`;
    }
}

// OptimusNetto		OPTIMUS_NETTO
export class OptimusNettoTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode,
                optimusBasisVal: number, optimusExtraVal: number) {
        super(monthCode, contract, position, variant, article, concept, 0);
        this.OptimusBasisVal = optimusBasisVal;
        this.OptimusExtraVal = optimusExtraVal;
    }
    OptimusBasisVal: number;
    OptimusExtraVal: number;
    targetMessage(): string {
        const optimusBasisVal = OperationsDec.divide(new bigDecimal(this.OptimusBasisVal), OptimulaTermTarget.BIG_100);
        const optimusExtraVal = OperationsDec.divide(new bigDecimal(this.OptimusExtraVal), OptimulaTermTarget.BIG_100);
        return `Basis: ${this.TargetBasis}, Target Basis: ${optimusBasisVal}, Target Extra: ${optimusExtraVal}`;
    }
}

// ReducedBasis		REDUCED_BASIS
export class ReducedBasisTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode,
                articleTarget: ArticleCode) {
        super(monthCode, contract, position, variant, article, concept, 0);
        this.ArticleTarget = articleTarget;
    }
    ArticleTarget: ArticleCode;
    targetMessage(): string {
        return `Basis: ${this.TargetBasis}, Target Article: ${NameOfArticle(this.ArticleTarget.value)}`;
    }
}

// ReducedHours		REDUCED_HOURS
export class ReducedHoursTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode,
                articleTarget: ArticleCode) {
        super(monthCode, contract, position, variant, article, concept, 0);
        this.ArticleTarget = articleTarget;
    }
    ArticleTarget: ArticleCode;
    targetMessage(): string {
        return `Basis: ${this.TargetBasis}, Target Article: ${NameOfArticle(this.ArticleTarget.value)}`;
    }
}

// ReducedFixed		REDUCED_FIXED
export class ReducedFixedTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode,
                articleTarget: ArticleCode) {
        super(monthCode, contract, position, variant, article, concept, 0);
        this.ArticleTarget = articleTarget;
    }
    ArticleTarget: ArticleCode;
    targetMessage(): string {
        return `Basis: ${this.TargetBasis}, Target Article: ${NameOfArticle(this.ArticleTarget.value)}`;
    }
}

// ReducedNetto		REDUCED_NETTO
export class ReducedNettoTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode,
                articleTarget: ArticleCode) {
        super(monthCode, contract, position, variant, article, concept, 0);
        this.ArticleTarget = articleTarget;
    }
    ArticleTarget: ArticleCode;
    targetMessage(): string {
        return `Basis: ${this.TargetBasis}, Target Article: ${NameOfArticle(this.ArticleTarget.value)}`;
    }
}

// AgrworkHours		AGRWORK_HOURS
export class AgrworkHoursTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode,
                agrWorkTarifVal: number, agrWorkRatioVal: number, agrWorkLimitVal: number, agrHourLimitVal: number) {
        super(monthCode, contract, position, variant, article, concept, 0);
        this.AgrWorkTarifVal = agrWorkTarifVal;
        this.AgrWorkRatioVal = agrWorkRatioVal;
        this.AgrWorkLimitVal = agrWorkLimitVal;
        this.AgrHourLimitVal = agrHourLimitVal;
    }
    AgrWorkTarifVal: number;
    AgrWorkRatioVal: number;
    AgrWorkLimitVal: number;
    AgrHourLimitVal: number;
    targetMessage(): string {
        const agrWorkTarifVal = OperationsDec.divide(new bigDecimal(this.AgrWorkTarifVal), OptimulaTermTarget.BIG_100);
        const agrWorkRatioVal = OperationsDec.divide(new bigDecimal(this.AgrWorkRatioVal), OptimulaTermTarget.BIG_100);
        const agrWorkLimitVal = OperationsDec.divide(new bigDecimal(this.AgrWorkLimitVal), OptimulaTermTarget.BIG_100);
        const agrHourLimitVal = OperationsDec.divide(new bigDecimal(this.AgrHourLimitVal), OptimulaTermTarget.BIG_100);
        return `Basis: ${this.TargetBasis}, Target Tariff: ${agrWorkTarifVal}, Target Ratio: ${agrWorkRatioVal}, Limit Value: ${agrWorkLimitVal}, Limit Hours: ${agrHourLimitVal}`;
    }
}

// AgrtaskHours		AGRTASK_HOURS
export class AgrtaskHoursTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode,
                agrWorkTarifVal: number, agrWorkRatioVal: number, agrWorkLimitVal: number, agrHourLimitVal: number) {
        super(monthCode, contract, position, variant, article, concept, 0);
        this.AgrWorkTarifVal = agrWorkTarifVal;
        this.AgrWorkRatioVal = agrWorkRatioVal;
        this.AgrWorkLimitVal = agrWorkLimitVal;
        this.AgrHourLimitVal = agrHourLimitVal;
    }
    AgrWorkTarifVal: number;
    AgrWorkRatioVal: number;
    AgrWorkLimitVal: number;
    AgrHourLimitVal: number;
    targetMessage(): string {
        const agrWorkTarifVal = OperationsDec.divide(new bigDecimal(this.AgrWorkTarifVal), OptimulaTermTarget.BIG_100);
        const agrWorkRatioVal = OperationsDec.divide(new bigDecimal(this.AgrWorkRatioVal), OptimulaTermTarget.BIG_100);
        const agrWorkLimitVal = OperationsDec.divide(new bigDecimal(this.AgrWorkLimitVal), OptimulaTermTarget.BIG_100);
        const agrHourLimitVal = OperationsDec.divide(new bigDecimal(this.AgrHourLimitVal), OptimulaTermTarget.BIG_100);
        return `Basis: ${this.TargetBasis}, Target Tariff: ${agrWorkTarifVal}, Target Ratio: ${agrWorkRatioVal}, Limit Value: ${agrWorkLimitVal}, Limit Hours: ${agrHourLimitVal}`;
    }
}

// AllowceMfull		ALLOWCE_MFULL
export class AllowceMfullTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode,
                allowceBasisVal: number) {
        super(monthCode, contract, position, variant, article, concept, 0);
        this.AllowceBasisVal = allowceBasisVal;
    }
    AllowceBasisVal: number;
    targetMessage(): string {
        return `Basis: ${this.TargetBasis}, Target Basis: ${OperationsDec.divide(new bigDecimal(this.AllowceBasisVal), OptimulaTermTarget.BIG_100)}`;
    }
}

// AllowceHfull		ALLOWCE_HFULL
export class AllowceHfullTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode,
                allowceTarifVal: number, allowceHfullVal: number) {
        super(monthCode, contract, position, variant, article, concept, 0);
        this.AllowceTarifVal = allowceTarifVal;
        this.AllowceHfullVal = allowceHfullVal;
    }
    AllowceTarifVal: number;
    AllowceHfullVal: number;
    targetMessage(): string {
        const allowceTarifVal = OperationsDec.divide(new bigDecimal(this.AllowceTarifVal), OptimulaTermTarget.BIG_100);
        const allowceHfullVal = OperationsDec.divide(new bigDecimal(this.AllowceHfullVal), OptimulaTermTarget.BIG_SIXTY);
        return `Basis: ${this.TargetBasis}, Target Tariff: ${allowceTarifVal}, Target Hours: ${allowceHfullVal}`;
    }
}

// AllowceHours		ALLOWCE_HOURS
export class AllowceHoursTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode,
                allowceTarifVal: number) {
        super(monthCode, contract, position, variant, article, concept, 0);
        this.AllowceTarifVal = allowceTarifVal;
    }
    AllowceTarifVal: number;
    targetMessage(): string {
        return `Basis: ${this.TargetBasis}, Target Tariff: ${OperationsDec.divide(new bigDecimal(this.AllowceTarifVal), OptimulaTermTarget.BIG_100)}`;
    }
}

// AllowceDaily		ALLOWCE_DAILY
export class AllowceDailyTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode,
                allowceDailyVal: number) {
        super(monthCode, contract, position, variant, article, concept, 0);
        this.AllowceDailyVal = allowceDailyVal;
    }
    AllowceDailyVal: number;
    targetMessage(): string {
        return `Basis: ${this.TargetBasis}, Target Daily: ${OperationsDec.divide(new bigDecimal(this.AllowceDailyVal), OptimulaTermTarget.BIG_100)}`;
    }
}

// AlldownDaily		ALLDOWN_DAILY
export class AlldownDailyTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode,
                allowceDailyVal: number) {
        super(monthCode, contract, position, variant, article, concept, 0);
        this.AllowceDailyVal = allowceDailyVal;
    }
    AllowceDailyVal: number;
    targetMessage(): string {
        return `Basis: ${this.TargetBasis}, Target Daily: ${OperationsDec.divide(new bigDecimal(this.AllowceDailyVal), OptimulaTermTarget.BIG_100)}`;
    }
}

// OffworkHours		OFFWORK_HOURS
export class OffworkHoursTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode,
                agrWorkTarifVal: number, agrWorkRatioVal: number, agrWorkLimitVal: number, agrHourLimitVal: number) {
        super(monthCode, contract, position, variant, article, concept, 0);
        this.AgrWorkTarifVal = agrWorkTarifVal;
        this.AgrWorkRatioVal = agrWorkRatioVal;
        this.AgrWorkLimitVal = agrWorkLimitVal;
        this.AgrHourLimitVal = agrHourLimitVal;
    }
    AgrWorkTarifVal: number;
    AgrWorkRatioVal: number;
    AgrWorkLimitVal: number;
    AgrHourLimitVal: number;
    targetMessage(): string {
        const agrWorkTarifVal = OperationsDec.divide(new bigDecimal(this.AgrWorkTarifVal), OptimulaTermTarget.BIG_100);
        const agrWorkRatioVal = OperationsDec.divide(new bigDecimal(this.AgrWorkRatioVal), OptimulaTermTarget.BIG_100);
        const agrWorkLimitVal = OperationsDec.divide(new bigDecimal(this.AgrWorkLimitVal), OptimulaTermTarget.BIG_100);
        const agrHourLimitVal = OperationsDec.divide(new bigDecimal(this.AgrHourLimitVal), OptimulaTermTarget.BIG_100);
        return `Basis: ${this.TargetBasis}, Target Tariff: ${agrWorkTarifVal}, Target Ratio: ${agrWorkRatioVal}, Limit Value: ${agrWorkLimitVal}, Limit Hours: ${agrHourLimitVal}`;
    }
}

// OfftaskHours		OFFTASK_HOURS
export class OfftaskHoursTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode,
                agrWorkTarifVal: number, agrWorkRatioVal: number, agrWorkLimitVal: number, agrHourLimitVal: number) {
        super(monthCode, contract, position, variant, article, concept, 0);
        this.AgrWorkTarifVal = agrWorkTarifVal;
        this.AgrWorkRatioVal = agrWorkRatioVal;
        this.AgrWorkLimitVal = agrWorkLimitVal;
        this.AgrHourLimitVal = agrHourLimitVal;
    }
    AgrWorkTarifVal: number;
    AgrWorkRatioVal: number;
    AgrWorkLimitVal: number;
    AgrHourLimitVal: number;
    targetMessage(): string {
        const agrWorkTarifVal = OperationsDec.divide(new bigDecimal(this.AgrWorkTarifVal), OptimulaTermTarget.BIG_100);
        const agrWorkRatioVal = OperationsDec.divide(new bigDecimal(this.AgrWorkRatioVal), OptimulaTermTarget.BIG_100);
        const agrWorkLimitVal = OperationsDec.divide(new bigDecimal(this.AgrWorkLimitVal), OptimulaTermTarget.BIG_100);
        const agrHourLimitVal = OperationsDec.divide(new bigDecimal(this.AgrHourLimitVal), OptimulaTermTarget.BIG_100);
        return `Basis: ${this.TargetBasis}, Target Tariff: ${agrWorkTarifVal}, Target Ratio: ${agrWorkRatioVal}, Limit Value: ${agrWorkLimitVal}, Limit Hours: ${agrHourLimitVal}`;
    }
}

// OffsetsHfull		OFFSETS_HFULL
export class OffsetsHfullTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode,
                allowceTarifVal: number, allowceHfullVal: number) {
        super(monthCode, contract, position, variant, article, concept, 0);
        this.AllowceTarifVal = allowceTarifVal;
        this.AllowceHfullVal = allowceHfullVal;
    }
    AllowceTarifVal: number;
    AllowceHfullVal: number;
    targetMessage(): string {
        const allowceTarifVal = OperationsDec.divide(new bigDecimal(this.AllowceTarifVal), OptimulaTermTarget.BIG_100);
        const allowceHfullVal = OperationsDec.divide(new bigDecimal(this.AllowceHfullVal), OptimulaTermTarget.BIG_SIXTY);
        return `Basis: ${this.TargetBasis}, Target Tariff: ${allowceTarifVal}, Target Hours: ${allowceHfullVal}`;
    }
}

// OffsetsHours		OFFSETS_HOURS
export class OffsetsHoursTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode,
                allowceTarifVal: number) {
        super(monthCode, contract, position, variant, article, concept, 0);
        this.AllowceTarifVal = allowceTarifVal;
    }
    AllowceTarifVal: number;
    targetMessage(): string {
        return `Basis: ${this.TargetBasis}, Target Tariff: ${OperationsDec.divide(new bigDecimal(this.AllowceTarifVal), OptimulaTermTarget.BIG_100)}`;
    }
}

// OffsetsDaily		OFFSETS_DAILY
export class OffsetsDailyTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode,
                allowceDailyVal: number) {
        super(monthCode, contract, position, variant, article, concept, 0);
        this.AllowceDailyVal = allowceDailyVal;
    }
    AllowceDailyVal: number;
    targetMessage(): string {
        return `Basis: ${this.TargetBasis}, Target Daily: ${OperationsDec.divide(new bigDecimal(this.AllowceDailyVal), OptimulaTermTarget.BIG_100)}`;
    }
}

// OffdownDaily		OFFDOWN_DAILY
export class OffdownDailyTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode,
                allowceDailyVal: number) {
        super(monthCode, contract, position, variant, article, concept, 0);
        this.AllowceDailyVal = allowceDailyVal;
    }
    AllowceDailyVal: number;
    targetMessage(): string {
        return `Basis: ${this.TargetBasis}, Target Daily: ${OperationsDec.divide(new bigDecimal(this.AllowceDailyVal), OptimulaTermTarget.BIG_100)}`;
    }
}

// SettlemTargets		SETTLEM_TARGETS
export class SettlemTargetsTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode) {
        super(monthCode, contract, position, variant, article, concept, 0);
    }
}

// SettlemTarnett		SETTLEM_TARNETT
export class SettlemTarnettTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode) {
        super(monthCode, contract, position, variant, article, concept, 0);
    }
}

// SettlemAgrwork		SETTLEM_AGRWORK
export class SettlemAgrworkTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode) {
        super(monthCode, contract, position, variant, article, concept, 0);
    }
}

// SettlemAgrtask		SETTLEM_AGRTASK
export class SettlemAgrtaskTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode) {
        super(monthCode, contract, position, variant, article, concept, 0);
    }
}

// SettlemAllowce		SETTLEM_ALLOWCE
export class SettlemAllowceTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode) {
        super(monthCode, contract, position, variant, article, concept, 0);
    }
}

// SettlemAllnett		SETTLEM_ALLNETT
export class SettlemAllnettTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode) {
        super(monthCode, contract, position, variant, article, concept, 0);
    }
}

// SettlemOffwork		SETTLEM_OFFWORK
export class SettlemOffworkTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode) {
        super(monthCode, contract, position, variant, article, concept, 0);
    }
}

// SettlemOfftask		SETTLEM_OFFTASK
export class SettlemOfftaskTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode) {
        super(monthCode, contract, position, variant, article, concept, 0);
    }
}

// SettlemOffsets		SETTLEM_OFFSETS
export class SettlemOffsetsTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode) {
        super(monthCode, contract, position, variant, article, concept, 0);
    }
}

// SettlemResults		SETTLEM_RESULTS
export class SettlemResultsTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode) {
        super(monthCode, contract, position, variant, article, concept, 0);
    }
}

// SettlemResnett		SETTLEM_RESNETT
export class SettlemResnettTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode) {
        super(monthCode, contract, position, variant, article, concept, 0);
    }
}

// IncomesTaxfree		INCOMES_TAXFREE
export class IncomesTaxfreeTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode) {
        super(monthCode, contract, position, variant, article, concept, 0);
    }
}

// IncomesTaxbase		INCOMES_TAXBASE
export class IncomesTaxbaseTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode) {
        super(monthCode, contract, position, variant, article, concept, 0);
    }
}

// IncomesTaxwins		INCOMES_TAXWINS
export class IncomesTaxwinsTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode) {
        super(monthCode, contract, position, variant, article, concept, 0);
    }
}

// IncomesSummary		INCOMES_SUMMARY
export class IncomesSummaryTarget extends OptimulaTermTarget {

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode) {
        super(monthCode, contract, position, variant, article, concept, 0);
    }
}

