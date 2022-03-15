import { ConceptCode } from "hravemzdy.procezor";
import { ArticleCode } from "hravemzdy.procezor";
import { VariantCode } from "hravemzdy.procezor";
import { MonthCode } from "hravemzdy.procezor";
import { ContractCode, PositionCode } from "hravemzdy.procezor";
import { OptimulaTermTarget } from "./concepts";
export declare class TimesheetsPlanTarget extends OptimulaTermTarget {
    constructor(monthCode: MonthCode, contract: ContractCode, position: PositionCode, variant: VariantCode, article: ArticleCode, concept: ConceptCode, targetBasis: number, basis: number);
    targetBasis: number;
    targetMessage(): string;
}
