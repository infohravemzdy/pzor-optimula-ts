import { ConceptCode } from "hravemzdy.procezor";
import { ArticleCode } from "hravemzdy.procezor";
import { VariantCode } from "hravemzdy.procezor";
import { MonthCode } from "hravemzdy.procezor";
import { ContractCode, PositionCode } from "hravemzdy.procezor";
import { TermTarget, ITermTarget } from "hravemzdy.procezor";
import { TermResult } from "hravemzdy.procezor";
import { ConceptSpec, ResultFunc } from "hravemzdy.procezor";
import { IArticleSpec } from "hravemzdy.procezor";
export declare class OptimulaConceptSpec extends ConceptSpec {
    constructor(_code: ConceptCode, _path: Iterable<ArticleCode>, _result: ResultFunc);
}
export declare class OptimulaTermTarget extends TermTarget {
    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode, article: ArticleCode, concept: ConceptCode, basis: number);
    basis: number;
    targetMessage(): string;
}
export declare class OptimulaTermResult extends TermResult {
    constructor(target: ITermTarget, spec: IArticleSpec, value: number, basis: number);
    basis: number;
    value: number;
    resultMessage(): string;
}
