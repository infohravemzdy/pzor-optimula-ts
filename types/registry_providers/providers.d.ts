import { ConceptSpecProvider } from "hravemzdy.procezor";
import { IConceptSpec } from "hravemzdy.procezor";
import { ConceptCode } from "hravemzdy.procezor";
import { ArticleCode } from "hravemzdy.procezor";
import { VersionCode, VariantCode } from "hravemzdy.procezor";
import { MonthCode } from "hravemzdy.procezor";
import { IContractTermList, IPositionTermList } from "hravemzdy.procezor";
import { ITermTargetList } from "hravemzdy.procezor";
import { IPeriod, IBundleProps } from "hravemzdy.legalios";
import { OptimulaConceptConst } from "../registry_constants/ConceptsCode";
import { OptimulaConceptSpec } from "./concepts";
export declare class TimesheetsPlanConProv extends ConceptSpecProvider {
    static CONCEPT_CODE: OptimulaConceptConst;
    constructor();
    GetSpec(period: IPeriod, version: VersionCode): IConceptSpec;
}
export declare class TimesheetsPlanConSpec extends OptimulaConceptSpec {
    constructor(_code: ConceptCode);
    defaultTargetList(article: ArticleCode, period: IPeriod, ruleset: IBundleProps, month: MonthCode, contractTerms: IContractTermList, positionTerms: IPositionTermList, targets: ITermTargetList, vars: VariantCode): ITermTargetList;
    static new(): TimesheetsPlanConSpec;
    private static ConceptEval;
}
