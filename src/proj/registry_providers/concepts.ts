import {ConceptCode} from "hravemzdy.procezor";
import {ArticleCode} from "hravemzdy.procezor";
import {VariantCode} from "hravemzdy.procezor";
import {MonthCode} from "hravemzdy.procezor";
import {ContractCode, PositionCode} from "hravemzdy.procezor";
import {TermTarget, ITermTarget} from "hravemzdy.procezor";
import {TermResult} from "hravemzdy.procezor";
import {ConceptSpec, ResultFunc} from "hravemzdy.procezor";
import {IArticleSpec} from "hravemzdy.procezor";
import bigDecimal = require("js-big-decimal");

export class OptimulaConceptSpec extends ConceptSpec {
    constructor(_code: ConceptCode, _path: Iterable<ArticleCode>, _result: ResultFunc) {
        super(_code, _path, _result);
    }
}

export class OptimulaTermTarget extends TermTarget {
    protected static BIG_100 = new bigDecimal(100);
    protected static BIG_ZERO = new bigDecimal(0);
    protected static BIG_050 = new bigDecimal(0.50);
    protected static BIG_SIXTY = new bigDecimal(60);

    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode,
                article: ArticleCode, concept: ConceptCode, targetBasis: number) {
        super(monthCode, contract, position, variant, article, concept);
        this.TargetBasis = targetBasis;
    }
    TargetBasis: number;

    targetMessage(): string {
        return `Target Basis: ${(this.TargetBasis)}`;
    }
}

export class OptimulaTermResult extends TermResult {
    constructor(target: ITermTarget, spec: IArticleSpec,
                resultValue: number, resultBasis: number) {
        super(target, spec);
        this.ResultValue = resultValue;
        this.ResultBasis = resultBasis;
    }
    ResultValue: number;
    ResultBasis: number;

    resultMessage(): string {
        return `Result Value: ${(this.ResultValue)}, Result Basis: ${(this.ResultBasis)}`;
    }
}
