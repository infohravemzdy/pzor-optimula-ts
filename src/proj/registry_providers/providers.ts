import { ConceptSpec, ConceptSpecProvider } from "hravemzdy.procezor";
import {ITermResultError} from "hravemzdy.procezor";
import {IConceptSpec, IArticleSpec} from "hravemzdy.procezor";
import {ConceptCode} from "hravemzdy.procezor";
import {ArticleCode} from "hravemzdy.procezor";
import {VersionCode, VariantCode} from "hravemzdy.procezor";
import {MonthCode} from "hravemzdy.procezor";
import {ContractCode, PositionCode} from "hravemzdy.procezor";
import {IContractTermList, IPositionTermList} from "hravemzdy.procezor";
import {ITermTarget, ITermTargetList, ITermResult, BuilderResultList} from "hravemzdy.procezor";
import {IPeriod, IBundleProps} from "hravemzdy.legalios";
import {OptimulaConceptConst} from "../registry_constants/ConceptsCode";
import {Result} from "@badrap/result";
import {
    AgrtaskHoursTarget,
    AgrworkHoursTarget,
    AlldownDailyTarget,
    AllowceDailyTarget,
    AllowceHfullTarget,
    AllowceHoursTarget,
    AllowceMfullTarget,
    IncomesSummaryTarget,
    IncomesTaxbaseTarget,
    IncomesTaxfreeTarget,
    IncomesTaxwinsTarget,
    OffdownDailyTarget,
    OffsetsDailyTarget,
    OffsetsHfullTarget,
    OffsetsHoursTarget,
    OfftaskHoursTarget,
    OffworkHoursTarget,
    OptimusBasisTarget,
    OptimusFixedTarget,
    OptimusHoursTarget,
    OptimusNettoTarget,
    PaymentBasisTarget,
    PaymentFixedTarget,
    PaymentHoursTarget,
    ReducedBasisTarget,
    ReducedFixedTarget,
    ReducedHoursTarget,
    ReducedNettoTarget,
    SettlemAgrtaskTarget,
    SettlemAgrworkTarget,
    SettlemAllnettTarget,
    SettlemAllowceTarget,
    SettlemOffsetsTarget,
    SettlemOfftaskTarget,
    SettlemOffworkTarget,
    SettlemResnettTarget,
    SettlemResultsTarget,
    SettlemTargetsTarget,
    SettlemTarnettTarget,
    TimeactualWorkTarget,
    TimesheetsPlanTarget,
    TimesheetsWorkTarget
} from "./targets";
import {
    AgrtaskHoursResult,
    AgrworkHoursResult,
    AlldownDailyResult,
    AllowceDailyResult,
    AllowceHfullResult,
    AllowceHoursResult,
    AllowceMfullResult,
    IncomesSummaryResult,
    IncomesTaxbaseResult,
    IncomesTaxfreeResult,
    IncomesTaxwinsResult,
    OffdownDailyResult,
    OffsetsDailyResult,
    OffsetsHfullResult,
    OffsetsHoursResult,
    OfftaskHoursResult,
    OffworkHoursResult,
    OptimusBasisResult,
    OptimusFixedResult,
    OptimusHoursResult,
    OptimusNettoResult,
    PaymentBasisResult,
    PaymentFixedResult,
    PaymentHoursResult,
    ReducedBasisResult,
    ReducedFixedResult,
    ReducedHoursResult,
    ReducedNettoResult,
    SettlemAgrtaskResult,
    SettlemAgrworkResult,
    SettlemAllnettResult,
    SettlemAllowceResult,
    SettlemOffsetsResult,
    SettlemOfftaskResult,
    SettlemOffworkResult,
    SettlemResnettResult,
    SettlemResultsResult,
    SettlemTargetsResult,
    SettlemTarnettResult,
    TimeactualWorkResult,
    TimesheetsPlanResult,
    TimesheetsWorkResult
} from "./results";
import {OptimulaConceptSpec} from "./concepts";
import { OptimulaArticleConst } from "../registry_constants/ArticlesConst";

// TimesheetsPlan		TIMESHEETS_PLAN
export class TimesheetsPlanConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_TIMESHEETS_PLAN;
    constructor() {
        super(ConceptCode.get(TimesheetsPlanConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new TimesheetsPlanConSpec(this.Code());
    }
}

export class TimesheetsPlanConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        super(_code, Array<ArticleCode>(), TimesheetsPlanConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new TimesheetsPlanTarget(month, con, pos, vars, article, this.Code(), 0))
    }

    static new(): TimesheetsPlanConSpec {
        return new TimesheetsPlanConSpec(ConceptCode.get(TimesheetsPlanConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new TimesheetsPlanResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// TimesheetsWork		TIMESHEETS_WORK
export class TimesheetsWorkConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_TIMESHEETS_WORK;
    constructor() {
        super(ConceptCode.get(TimesheetsWorkConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new TimesheetsWorkConSpec(this.Code());
    }
}

export class TimesheetsWorkConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        const _path: number[] = [
            OptimulaArticleConst.ARTICLE_TIMESHEETS_PLAN,
        ];
        super(_code, ConceptSpec.constToPathArray(_path), TimesheetsWorkConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new TimesheetsWorkTarget(month, con, pos, vars, article, this.Code(), 0, 0))
    }

    static new(): TimesheetsWorkConSpec {
        return new TimesheetsWorkConSpec(ConceptCode.get(TimesheetsWorkConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new TimesheetsWorkResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// TimeactualWork		TIMEACTUAL_WORK
export class TimeactualWorkConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_TIMEACTUAL_WORK;
    constructor() {
        super(ConceptCode.get(TimeactualWorkConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new TimeactualWorkConSpec(this.Code());
    }
}

export class TimeactualWorkConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        const _path: number[] = [
            OptimulaArticleConst.ARTICLE_TIMESHEETS_WORK,
        ];
        super(_code, ConceptSpec.constToPathArray(_path), TimeactualWorkConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new TimeactualWorkTarget(month, con, pos, vars, article, this.Code(), 0, 0, 0))
    }

    static new(): TimeactualWorkConSpec {
        return new TimeactualWorkConSpec(ConceptCode.get(TimeactualWorkConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new TimeactualWorkResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// PaymentBasis		PAYMENT_BASIS
export class PaymentBasisConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_PAYMENT_BASIS;
    constructor() {
        super(ConceptCode.get(PaymentBasisConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new PaymentBasisConSpec(this.Code());
    }
}

export class PaymentBasisConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        const _path: number[] = [
            OptimulaArticleConst.ARTICLE_TIMESHEETS_WORK,
            OptimulaArticleConst.ARTICLE_TIMEACTUAL_WORK,
        ];
        super(_code, ConceptSpec.constToPathArray(_path), PaymentBasisConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new PaymentBasisTarget(month, con, pos, vars, article, this.Code(), 0))
    }

    static new(): PaymentBasisConSpec {
        return new PaymentBasisConSpec(ConceptCode.get(PaymentBasisConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new PaymentBasisResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// PaymentHours		PAYMENT_HOURS
export class PaymentHoursConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_PAYMENT_HOURS;
    constructor() {
        super(ConceptCode.get(PaymentHoursConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new PaymentHoursConSpec(this.Code());
    }
}

export class PaymentHoursConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        const _path: number[] = [
            OptimulaArticleConst.ARTICLE_TIMEACTUAL_WORK,
        ];
        super(_code, ConceptSpec.constToPathArray(_path), PaymentHoursConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new PaymentHoursTarget(month, con, pos, vars, article, this.Code(), 0, 0))
    }

    static new(): PaymentHoursConSpec {
        return new PaymentHoursConSpec(ConceptCode.get(PaymentHoursConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new PaymentHoursResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// PaymentFixed		PAYMENT_FIXED
export class PaymentFixedConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_PAYMENT_FIXED;
    constructor() {
        super(ConceptCode.get(PaymentFixedConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new PaymentFixedConSpec(this.Code());
    }
}

export class PaymentFixedConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        super(_code, Array<ArticleCode>(), PaymentFixedConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new PaymentFixedTarget(month, con, pos, vars, article, this.Code(), 0))
    }

    static new(): PaymentFixedConSpec {
        return new PaymentFixedConSpec(ConceptCode.get(PaymentFixedConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new PaymentFixedResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// OptimusBasis		OPTIMUS_BASIS
export class OptimusBasisConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_OPTIMUS_BASIS;
    constructor() {
        super(ConceptCode.get(OptimusBasisConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new OptimusBasisConSpec(this.Code());
    }
}

export class OptimusBasisConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        const _path: number[] = [
            OptimulaArticleConst.ARTICLE_TIMESHEETS_WORK,
            OptimulaArticleConst.ARTICLE_TIMEACTUAL_WORK,
        ];
        super(_code, ConceptSpec.constToPathArray(_path), OptimusBasisConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new OptimusBasisTarget(month, con, pos, vars, article, this.Code(), 0))
    }

    static new(): OptimusBasisConSpec {
        return new OptimusBasisConSpec(ConceptCode.get(OptimusBasisConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new OptimusBasisResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// OptimusHours		OPTIMUS_HOURS
export class OptimusHoursConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_OPTIMUS_HOURS;
    constructor() {
        super(ConceptCode.get(OptimusHoursConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new OptimusHoursConSpec(this.Code());
    }
}

export class OptimusHoursConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        const _path: number[] = [
            OptimulaArticleConst.ARTICLE_TIMEACTUAL_WORK,
        ];
        super(_code, ConceptSpec.constToPathArray(_path), OptimusHoursConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new OptimusHoursTarget(month, con, pos, vars, article, this.Code(), 0, 0))
    }

    static new(): OptimusHoursConSpec {
        return new OptimusHoursConSpec(ConceptCode.get(OptimusHoursConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new OptimusHoursResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// OptimusFixed		OPTIMUS_FIXED
export class OptimusFixedConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_OPTIMUS_FIXED;
    constructor() {
        super(ConceptCode.get(OptimusFixedConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new OptimusFixedConSpec(this.Code());
    }
}

export class OptimusFixedConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        super(_code, Array<ArticleCode>(), OptimusFixedConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new OptimusFixedTarget(month, con, pos, vars, article, this.Code(), 0))
    }

    static new(): OptimusFixedConSpec {
        return new OptimusFixedConSpec(ConceptCode.get(OptimusFixedConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new OptimusFixedResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// OptimusNetto		OPTIMUS_NETTO
export class OptimusNettoConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_OPTIMUS_NETTO;
    constructor() {
        super(ConceptCode.get(OptimusNettoConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new OptimusNettoConSpec(this.Code());
    }
}

export class OptimusNettoConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        super(_code, Array<ArticleCode>(), OptimusNettoConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new OptimusNettoTarget(month, con, pos, vars, article, this.Code(), 0, 0))
    }

    static new(): OptimusNettoConSpec {
        return new OptimusNettoConSpec(ConceptCode.get(OptimusNettoConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new OptimusNettoResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// ReducedBasis		REDUCED_BASIS
export class ReducedBasisConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_REDUCED_BASIS;
    constructor() {
        super(ConceptCode.get(ReducedBasisConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new ReducedBasisConSpec(this.Code());
    }
}

export class ReducedBasisConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        const _path: number[] = [
            OptimulaArticleConst.ARTICLE_SETTLEM_TARGETS,
            OptimulaArticleConst.ARTICLE_SETTLEM_AGRWORK,
            OptimulaArticleConst.ARTICLE_TIMEACTUAL_WORK,
        ];
        super(_code, ConceptSpec.constToPathArray(_path), ReducedBasisConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new ReducedBasisTarget(month, con, pos, vars, article, this.Code(), ArticleCode.zero()))
    }

    static new(): ReducedBasisConSpec {
        return new ReducedBasisConSpec(ConceptCode.get(ReducedBasisConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new ReducedBasisResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// ReducedHours		REDUCED_HOURS
export class ReducedHoursConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_REDUCED_HOURS;
    constructor() {
        super(ConceptCode.get(ReducedHoursConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new ReducedHoursConSpec(this.Code());
    }
}

export class ReducedHoursConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        const _path: number[] = [
            OptimulaArticleConst.ARTICLE_SETTLEM_TARGETS,
            OptimulaArticleConst.ARTICLE_SETTLEM_AGRWORK,
            OptimulaArticleConst.ARTICLE_TIMEACTUAL_WORK,
        ];
        super(_code, ConceptSpec.constToPathArray(_path), ReducedHoursConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new ReducedHoursTarget(month, con, pos, vars, article, this.Code(), ArticleCode.zero()))
    }

    static new(): ReducedHoursConSpec {
        return new ReducedHoursConSpec(ConceptCode.get(ReducedHoursConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new ReducedHoursResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// ReducedFixed		REDUCED_FIXED
export class ReducedFixedConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_REDUCED_FIXED;
    constructor() {
        super(ConceptCode.get(ReducedFixedConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new ReducedFixedConSpec(this.Code());
    }
}

export class ReducedFixedConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        const _path: number[] = [
            OptimulaArticleConst.ARTICLE_SETTLEM_TARGETS,
            OptimulaArticleConst.ARTICLE_SETTLEM_AGRWORK,
            OptimulaArticleConst.ARTICLE_TIMEACTUAL_WORK,
        ];
        super(_code, ConceptSpec.constToPathArray(_path), ReducedFixedConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new ReducedFixedTarget(month, con, pos, vars, article, this.Code(), ArticleCode.zero()))
    }

    static new(): ReducedFixedConSpec {
        return new ReducedFixedConSpec(ConceptCode.get(ReducedFixedConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new ReducedFixedResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// ReducedNetto		REDUCED_NETTO
export class ReducedNettoConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_REDUCED_NETTO;
    constructor() {
        super(ConceptCode.get(ReducedNettoConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new ReducedNettoConSpec(this.Code());
    }
}

export class ReducedNettoConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        const _path: number[] = [
            OptimulaArticleConst.ARTICLE_SETTLEM_TARNETT,
            OptimulaArticleConst.ARTICLE_SETTLEM_AGRWORK,
            OptimulaArticleConst.ARTICLE_SETTLEM_AGRTASK,
            OptimulaArticleConst.ARTICLE_TIMEACTUAL_WORK,
        ];
        super(_code, ConceptSpec.constToPathArray(_path), ReducedNettoConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new ReducedNettoTarget(month, con, pos, vars, article, this.Code(), ArticleCode.zero()))
    }

    static new(): ReducedNettoConSpec {
        return new ReducedNettoConSpec(ConceptCode.get(ReducedNettoConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new ReducedNettoResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// AgrworkHours		AGRWORK_HOURS
export class AgrworkHoursConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_AGRWORK_HOURS;
    constructor() {
        super(ConceptCode.get(AgrworkHoursConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new AgrworkHoursConSpec(this.Code());
    }
}

export class AgrworkHoursConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        const _path: number[] = [
            OptimulaArticleConst.ARTICLE_SETTLEM_TARGETS,
            OptimulaArticleConst.ARTICLE_SETTLEM_ALLOWCE,
            OptimulaArticleConst.ARTICLE_TIMEACTUAL_WORK,
        ];
        super(_code, ConceptSpec.constToPathArray(_path), AgrworkHoursConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new AgrworkHoursTarget(month, con, pos, vars, article, this.Code(), 0, 0, 0, 0))
    }

    static new(): AgrworkHoursConSpec {
        return new AgrworkHoursConSpec(ConceptCode.get(AgrworkHoursConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new AgrworkHoursResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// AgrtaskHours		AGRTASK_HOURS
export class AgrtaskHoursConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_AGRTASK_HOURS;
    constructor() {
        super(ConceptCode.get(AgrtaskHoursConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new AgrtaskHoursConSpec(this.Code());
    }
}

export class AgrtaskHoursConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        const _path: number[] = [
            OptimulaArticleConst.ARTICLE_SETTLEM_TARGETS,
            OptimulaArticleConst.ARTICLE_SETTLEM_ALLOWCE,
            OptimulaArticleConst.ARTICLE_TIMEACTUAL_WORK,
        ];
        super(_code, ConceptSpec.constToPathArray(_path), AgrtaskHoursConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new AgrtaskHoursTarget(month, con, pos, vars, article, this.Code(), 0, 0, 0, 0))
    }

    static new(): AgrtaskHoursConSpec {
        return new AgrtaskHoursConSpec(ConceptCode.get(AgrtaskHoursConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new AgrtaskHoursResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// AllowceMfull		ALLOWCE_MFULL
export class AllowceMfullConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_ALLOWCE_MFULL;
    constructor() {
        super(ConceptCode.get(AllowceMfullConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new AllowceMfullConSpec(this.Code());
    }
}

export class AllowceMfullConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        const _path: number[] = [
            OptimulaArticleConst.ARTICLE_TIMEACTUAL_WORK,
        ];
        super(_code, ConceptSpec.constToPathArray(_path), AllowceMfullConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new AllowceMfullTarget(month, con, pos, vars, article, this.Code(), 0))
    }

    static new(): AllowceMfullConSpec {
        return new AllowceMfullConSpec(ConceptCode.get(AllowceMfullConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new AllowceMfullResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// AllowceHfull		ALLOWCE_HFULL
export class AllowceHfullConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_ALLOWCE_HFULL;
    constructor() {
        super(ConceptCode.get(AllowceHfullConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new AllowceHfullConSpec(this.Code());
    }
}

export class AllowceHfullConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        const _path: number[] = [
            OptimulaArticleConst.ARTICLE_TIMEACTUAL_WORK,
        ];
        super(_code, ConceptSpec.constToPathArray(_path), AllowceHfullConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new AllowceHfullTarget(month, con, pos, vars, article, this.Code(), 0, 0))
    }

    static new(): AllowceHfullConSpec {
        return new AllowceHfullConSpec(ConceptCode.get(AllowceHfullConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new AllowceHfullResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// AllowceHours		ALLOWCE_HOURS
export class AllowceHoursConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_ALLOWCE_HOURS;
    constructor() {
        super(ConceptCode.get(AllowceHoursConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new AllowceHoursConSpec(this.Code());
    }
}

export class AllowceHoursConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        const _path: number[] = [
            OptimulaArticleConst.ARTICLE_TIMEACTUAL_WORK,
        ];
        super(_code, ConceptSpec.constToPathArray(_path), AllowceHoursConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new AllowceHoursTarget(month, con, pos, vars, article, this.Code(), 0))
    }

    static new(): AllowceHoursConSpec {
        return new AllowceHoursConSpec(ConceptCode.get(AllowceHoursConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new AllowceHoursResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// AllowceDaily		ALLOWCE_DAILY
export class AllowceDailyConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_ALLOWCE_DAILY;
    constructor() {
        super(ConceptCode.get(AllowceDailyConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new AllowceDailyConSpec(this.Code());
    }
}

export class AllowceDailyConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        const _path: number[] = [
            OptimulaArticleConst.ARTICLE_TIMEACTUAL_WORK,
        ];
        super(_code, ConceptSpec.constToPathArray(_path), AllowceDailyConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new AllowceDailyTarget(month, con, pos, vars, article, this.Code(), 0))
    }

    static new(): AllowceDailyConSpec {
        return new AllowceDailyConSpec(ConceptCode.get(AllowceDailyConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new AllowceDailyResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// AlldownDaily		ALLDOWN_DAILY
export class AlldownDailyConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_ALLDOWN_DAILY;
    constructor() {
        super(ConceptCode.get(AlldownDailyConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new AlldownDailyConSpec(this.Code());
    }
}

export class AlldownDailyConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        const _path: number[] = [
            OptimulaArticleConst.ARTICLE_TIMEACTUAL_WORK,
        ];
        super(_code, ConceptSpec.constToPathArray(_path), AlldownDailyConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new AlldownDailyTarget(month, con, pos, vars, article, this.Code(), 0))
    }

    static new(): AlldownDailyConSpec {
        return new AlldownDailyConSpec(ConceptCode.get(AlldownDailyConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new AlldownDailyResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// OffworkHours		OFFWORK_HOURS
export class OffworkHoursConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_OFFWORK_HOURS;
    constructor() {
        super(ConceptCode.get(OffworkHoursConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new OffworkHoursConSpec(this.Code());
    }
}

export class OffworkHoursConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        const _path: number[] = [
            OptimulaArticleConst.ARTICLE_TIMEACTUAL_WORK,
        ];
        super(_code, ConceptSpec.constToPathArray(_path), OffworkHoursConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new OffworkHoursTarget(month, con, pos, vars, article, this.Code(), 0, 0, 0, 0))
    }

    static new(): OffworkHoursConSpec {
        return new OffworkHoursConSpec(ConceptCode.get(OffworkHoursConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new OffworkHoursResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// OfftaskHours		OFFTASK_HOURS
export class OfftaskHoursConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_OFFTASK_HOURS;
    constructor() {
        super(ConceptCode.get(OfftaskHoursConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new OfftaskHoursConSpec(this.Code());
    }
}

export class OfftaskHoursConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        const _path: number[] = [
            OptimulaArticleConst.ARTICLE_TIMEACTUAL_WORK,
        ];
        super(_code, ConceptSpec.constToPathArray(_path), OfftaskHoursConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new OfftaskHoursTarget(month, con, pos, vars, article, this.Code(), 0, 0, 0, 0))
    }

    static new(): OfftaskHoursConSpec {
        return new OfftaskHoursConSpec(ConceptCode.get(OfftaskHoursConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new OfftaskHoursResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// OffsetsHfull		OFFSETS_HFULL
export class OffsetsHfullConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_OFFSETS_HFULL;
    constructor() {
        super(ConceptCode.get(OffsetsHfullConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new OffsetsHfullConSpec(this.Code());
    }
}

export class OffsetsHfullConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        const _path: number[] = [
            OptimulaArticleConst.ARTICLE_TIMEACTUAL_WORK,
        ];
        super(_code, ConceptSpec.constToPathArray(_path), OffsetsHfullConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new OffsetsHfullTarget(month, con, pos, vars, article, this.Code(), 0, 0))
    }

    static new(): OffsetsHfullConSpec {
        return new OffsetsHfullConSpec(ConceptCode.get(OffsetsHfullConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new OffsetsHfullResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// OffsetsHours		OFFSETS_HOURS
export class OffsetsHoursConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_OFFSETS_HOURS;
    constructor() {
        super(ConceptCode.get(OffsetsHoursConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new OffsetsHoursConSpec(this.Code());
    }
}

export class OffsetsHoursConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        const _path: number[] = [
            OptimulaArticleConst.ARTICLE_TIMEACTUAL_WORK,
        ];
        super(_code, ConceptSpec.constToPathArray(_path), OffsetsHoursConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new OffsetsHoursTarget(month, con, pos, vars, article, this.Code(), 0))
    }

    static new(): OffsetsHoursConSpec {
        return new OffsetsHoursConSpec(ConceptCode.get(OffsetsHoursConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new OffsetsHoursResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// OffsetsDaily		OFFSETS_DAILY
export class OffsetsDailyConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_OFFSETS_DAILY;
    constructor() {
        super(ConceptCode.get(OffsetsDailyConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new OffsetsDailyConSpec(this.Code());
    }
}

export class OffsetsDailyConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        const _path: number[] = [
            OptimulaArticleConst.ARTICLE_TIMEACTUAL_WORK,
        ];
        super(_code, ConceptSpec.constToPathArray(_path), OffsetsDailyConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new OffsetsDailyTarget(month, con, pos, vars, article, this.Code(), 0))
    }

    static new(): OffsetsDailyConSpec {
        return new OffsetsDailyConSpec(ConceptCode.get(OffsetsDailyConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new OffsetsDailyResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// OffdownDaily		OFFDOWN_DAILY
export class OffdownDailyConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_OFFDOWN_DAILY;
    constructor() {
        super(ConceptCode.get(OffdownDailyConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new OffdownDailyConSpec(this.Code());
    }
}

export class OffdownDailyConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        const _path: number[] = [
            OptimulaArticleConst.ARTICLE_TIMEACTUAL_WORK,
        ];
        super(_code, ConceptSpec.constToPathArray(_path), OffdownDailyConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new OffdownDailyTarget(month, con, pos, vars, article, this.Code(), 0))
    }

    static new(): OffdownDailyConSpec {
        return new OffdownDailyConSpec(ConceptCode.get(OffdownDailyConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new OffdownDailyResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// SettlemTargets		SETTLEM_TARGETS
export class SettlemTargetsConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_SETTLEM_TARGETS;
    constructor() {
        super(ConceptCode.get(SettlemTargetsConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new SettlemTargetsConSpec(this.Code());
    }
}

export class SettlemTargetsConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        super(_code, Array<ArticleCode>(), SettlemTargetsConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new SettlemTargetsTarget(month, con, pos, vars, article, this.Code()))
    }

    static new(): SettlemTargetsConSpec {
        return new SettlemTargetsConSpec(ConceptCode.get(SettlemTargetsConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new SettlemTargetsResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// SettlemTarnett		SETTLEM_TARNETT
export class SettlemTarnettConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_SETTLEM_TARNETT;
    constructor() {
        super(ConceptCode.get(SettlemTarnettConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new SettlemTarnettConSpec(this.Code());
    }
}

export class SettlemTarnettConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        super(_code, Array<ArticleCode>(), SettlemTarnettConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new SettlemTarnettTarget(month, con, pos, vars, article, this.Code()))
    }

    static new(): SettlemTarnettConSpec {
        return new SettlemTarnettConSpec(ConceptCode.get(SettlemTarnettConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new SettlemTarnettResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// SettlemAgrwork		SETTLEM_AGRWORK
export class SettlemAgrworkConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_SETTLEM_AGRWORK;
    constructor() {
        super(ConceptCode.get(SettlemAgrworkConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new SettlemAgrworkConSpec(this.Code());
    }
}

export class SettlemAgrworkConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        super(_code, Array<ArticleCode>(), SettlemAgrworkConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new SettlemAgrworkTarget(month, con, pos, vars, article, this.Code()))
    }

    static new(): SettlemAgrworkConSpec {
        return new SettlemAgrworkConSpec(ConceptCode.get(SettlemAgrworkConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new SettlemAgrworkResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// SettlemAgrtask		SETTLEM_AGRTASK
export class SettlemAgrtaskConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_SETTLEM_AGRTASK;
    constructor() {
        super(ConceptCode.get(SettlemAgrtaskConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new SettlemAgrtaskConSpec(this.Code());
    }
}

export class SettlemAgrtaskConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        super(_code, Array<ArticleCode>(), SettlemAgrtaskConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new SettlemAgrtaskTarget(month, con, pos, vars, article, this.Code()))
    }

    static new(): SettlemAgrtaskConSpec {
        return new SettlemAgrtaskConSpec(ConceptCode.get(SettlemAgrtaskConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new SettlemAgrtaskResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// SettlemAllowce		SETTLEM_ALLOWCE
export class SettlemAllowceConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_SETTLEM_ALLOWCE;
    constructor() {
        super(ConceptCode.get(SettlemAllowceConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new SettlemAllowceConSpec(this.Code());
    }
}

export class SettlemAllowceConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        super(_code, Array<ArticleCode>(), SettlemAllowceConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new SettlemAllowceTarget(month, con, pos, vars, article, this.Code()))
    }

    static new(): SettlemAllowceConSpec {
        return new SettlemAllowceConSpec(ConceptCode.get(SettlemAllowceConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new SettlemAllowceResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// SettlemAllnett		SETTLEM_ALLNETT
export class SettlemAllnettConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_SETTLEM_ALLNETT;
    constructor() {
        super(ConceptCode.get(SettlemAllnettConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new SettlemAllnettConSpec(this.Code());
    }
}

export class SettlemAllnettConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        super(_code, Array<ArticleCode>(), SettlemAllnettConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new SettlemAllnettTarget(month, con, pos, vars, article, this.Code()))
    }

    static new(): SettlemAllnettConSpec {
        return new SettlemAllnettConSpec(ConceptCode.get(SettlemAllnettConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new SettlemAllnettResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// SettlemOffwork		SETTLEM_OFFWORK
export class SettlemOffworkConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_SETTLEM_OFFWORK;
    constructor() {
        super(ConceptCode.get(SettlemOffworkConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new SettlemOffworkConSpec(this.Code());
    }
}

export class SettlemOffworkConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        super(_code, Array<ArticleCode>(), SettlemOffworkConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new SettlemOffworkTarget(month, con, pos, vars, article, this.Code()))
    }

    static new(): SettlemOffworkConSpec {
        return new SettlemOffworkConSpec(ConceptCode.get(SettlemOffworkConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new SettlemOffworkResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// SettlemOfftask		SETTLEM_OFFTASK
export class SettlemOfftaskConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_SETTLEM_OFFTASK;
    constructor() {
        super(ConceptCode.get(SettlemOfftaskConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new SettlemOfftaskConSpec(this.Code());
    }
}

export class SettlemOfftaskConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        super(_code, Array<ArticleCode>(), SettlemOfftaskConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new SettlemOfftaskTarget(month, con, pos, vars, article, this.Code()))
    }

    static new(): SettlemOfftaskConSpec {
        return new SettlemOfftaskConSpec(ConceptCode.get(SettlemOfftaskConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new SettlemOfftaskResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// SettlemOffsets		SETTLEM_OFFSETS
export class SettlemOffsetsConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_SETTLEM_OFFSETS;
    constructor() {
        super(ConceptCode.get(SettlemOffsetsConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new SettlemOffsetsConSpec(this.Code());
    }
}

export class SettlemOffsetsConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        super(_code, Array<ArticleCode>(), SettlemOffsetsConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new SettlemOffsetsTarget(month, con, pos, vars, article, this.Code()))
    }

    static new(): SettlemOffsetsConSpec {
        return new SettlemOffsetsConSpec(ConceptCode.get(SettlemOffsetsConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new SettlemOffsetsResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// SettlemResults		SETTLEM_RESULTS
export class SettlemResultsConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_SETTLEM_RESULTS;
    constructor() {
        super(ConceptCode.get(SettlemResultsConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new SettlemResultsConSpec(this.Code());
    }
}

export class SettlemResultsConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        super(_code, Array<ArticleCode>(), SettlemResultsConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new SettlemResultsTarget(month, con, pos, vars, article, this.Code()))
    }

    static new(): SettlemResultsConSpec {
        return new SettlemResultsConSpec(ConceptCode.get(SettlemResultsConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new SettlemResultsResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// SettlemResnett		SETTLEM_RESNETT
export class SettlemResnettConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_SETTLEM_RESNETT;
    constructor() {
        super(ConceptCode.get(SettlemResnettConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new SettlemResnettConSpec(this.Code());
    }
}

export class SettlemResnettConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        super(_code, Array<ArticleCode>(), SettlemResnettConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new SettlemResnettTarget(month, con, pos, vars, article, this.Code()))
    }

    static new(): SettlemResnettConSpec {
        return new SettlemResnettConSpec(ConceptCode.get(SettlemResnettConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new SettlemResnettResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// IncomesTaxfree		INCOMES_TAXFREE
export class IncomesTaxfreeConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_INCOMES_TAXFREE;
    constructor() {
        super(ConceptCode.get(IncomesTaxfreeConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new IncomesTaxfreeConSpec(this.Code());
    }
}

export class IncomesTaxfreeConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        super(_code, Array<ArticleCode>(), IncomesTaxfreeConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new IncomesTaxfreeTarget(month, con, pos, vars, article, this.Code()))
    }

    static new(): IncomesTaxfreeConSpec {
        return new IncomesTaxfreeConSpec(ConceptCode.get(IncomesTaxfreeConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new IncomesTaxfreeResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// IncomesTaxbase		INCOMES_TAXBASE
export class IncomesTaxbaseConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_INCOMES_TAXBASE;
    constructor() {
        super(ConceptCode.get(IncomesTaxbaseConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new IncomesTaxbaseConSpec(this.Code());
    }
}

export class IncomesTaxbaseConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        super(_code, Array<ArticleCode>(), IncomesTaxbaseConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new IncomesTaxbaseTarget(month, con, pos, vars, article, this.Code()))
    }

    static new(): IncomesTaxbaseConSpec {
        return new IncomesTaxbaseConSpec(ConceptCode.get(IncomesTaxbaseConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new IncomesTaxbaseResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// IncomesTaxwins		INCOMES_TAXWINS
export class IncomesTaxwinsConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_INCOMES_TAXWINS;
    constructor() {
        super(ConceptCode.get(IncomesTaxwinsConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new IncomesTaxwinsConSpec(this.Code());
    }
}

export class IncomesTaxwinsConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        super(_code, Array<ArticleCode>(), IncomesTaxwinsConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new IncomesTaxwinsTarget(month, con, pos, vars, article, this.Code()))
    }

    static new(): IncomesTaxwinsConSpec {
        return new IncomesTaxwinsConSpec(ConceptCode.get(IncomesTaxwinsConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new IncomesTaxwinsResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

// IncomesSummary		INCOMES_SUMMARY
export class IncomesSummaryConProv extends ConceptSpecProvider {
    static CONCEPT_CODE = OptimulaConceptConst.CONCEPT_INCOMES_SUMMARY;
    constructor() {
        super(ConceptCode.get(IncomesSummaryConProv.CONCEPT_CODE));
    }
    override GetSpec(period: IPeriod, version: VersionCode): IConceptSpec {
        return new IncomesSummaryConSpec(this.Code());
    }
}

export class IncomesSummaryConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode) {
        super(_code, Array<ArticleCode>(), IncomesSummaryConSpec.ConceptEval);
    }
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps,
                      month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList,
                      targets: ITermTargetList, vars: VariantCode) : ITermTargetList {
        const con = ContractCode.zero()
        const pos = PositionCode.zero()
        const targetsLength = Array.from(targets).length;
        if (targetsLength !== 0) {
            return Array<ITermTarget>()
        }
        return Array<ITermTarget>(new IncomesSummaryTarget(month, con, pos, vars, article, this.Code()))
    }

    static new(): IncomesSummaryConSpec {
        return new IncomesSummaryConSpec(ConceptCode.get(IncomesSummaryConProv.CONCEPT_CODE));
    }
    private static ConceptEval(target: ITermTarget, spec: IArticleSpec, period: IPeriod, ruleset: IBundleProps, results: BuilderResultList): BuilderResultList {
        const resultsValues: ITermResult = new IncomesSummaryResult(target, spec, 0);

        return new Array(Result.ok<ITermResult, ITermResultError>(resultsValues));
    }
}

