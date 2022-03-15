import { IArticleSpec } from "hravemzdy.procezor";
import { ITermTarget } from "hravemzdy.procezor";
import { OptimulaTermResult } from "./concepts";
export declare class TimesheetsPlanResult extends OptimulaTermResult {
    constructor(target: ITermTarget, spec: IArticleSpec, resultValue: number, resultBasis: number, value: number, basis: number);
    resultValue: number;
    resultBasis: number;
    resultMessage(): string;
}
