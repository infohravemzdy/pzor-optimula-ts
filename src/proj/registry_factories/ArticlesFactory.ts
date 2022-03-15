import {ArticleSpecFactory, CODE, IArticleSpecProvider} from "hravemzdy.procezor";
import {ProviderRecord} from "hravemzdy.procezor";
import { OptimulaArticleConst } from "../registry_constants/ArticlesConst";
import { OptimulaConceptConst } from "../registry_constants/ConceptsCode";


export class OptimulaArticleFactory extends ArticleSpecFactory {
    private static ARTICLE_DEFAULT_SEQUENS: number = 0;
    private providersConfig: ProviderRecord[] = [
        new ProviderRecord(OptimulaArticleConst.ARTICLE_TIMESHEETS_PLAN, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_TIMESHEETS_PLAN,
          []),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_TIMESHEETS_WORK, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_TIMESHEETS_WORK,
          []),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_TIMEACTUAL_WORK, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_TIMEACTUAL_WORK,
          []),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_MSALARY_TARGETS, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_PAYMENT_BASIS,
          [
              OptimulaArticleConst.ARTICLE_INCOMES_TAXWINS,
          ]),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_HSALARY_TARGETS, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_PAYMENT_HOURS,
          [
              OptimulaArticleConst.ARTICLE_INCOMES_TAXWINS,
          ]),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_MAWARDS_TARGETS, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_OPTIMUS_BASIS,
          [
              OptimulaArticleConst.ARTICLE_SETTLEM_TARGETS,
          ]),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_HAWARDS_TARGETS, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_OPTIMUS_HOURS,
          [
              OptimulaArticleConst.ARTICLE_SETTLEM_TARGETS,
          ]),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_PREMIUM_TARGETS, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_OPTIMUS_FIXED,
          [
              OptimulaArticleConst.ARTICLE_SETTLEM_TARGETS,
          ]),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_PREMADV_TARGETS, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_OPTIMUS_FIXED,
          [
              OptimulaArticleConst.ARTICLE_SETTLEM_TARGETS,
          ]),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_PREMEXT_TARGETS, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_OPTIMUS_FIXED,
          [
              OptimulaArticleConst.ARTICLE_SETTLEM_TARGETS,
          ]),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_MAWARDS_RESULTS, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_REDUCED_BASIS,
          [
              OptimulaArticleConst.ARTICLE_SETTLEM_RESULTS,
              OptimulaArticleConst.ARTICLE_INCOMES_TAXWINS,
          ]),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_HAWARDS_RESULTS, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_REDUCED_HOURS,
          [
              OptimulaArticleConst.ARTICLE_SETTLEM_RESULTS,
              OptimulaArticleConst.ARTICLE_INCOMES_TAXWINS,
          ]),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_PREMIUM_RESULTS, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_REDUCED_FIXED,
          [
              OptimulaArticleConst.ARTICLE_SETTLEM_RESULTS,
              OptimulaArticleConst.ARTICLE_INCOMES_TAXWINS,
          ]),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_PREMADV_RESULTS, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_REDUCED_FIXED,
          [
              OptimulaArticleConst.ARTICLE_SETTLEM_RESULTS,
              OptimulaArticleConst.ARTICLE_INCOMES_TAXWINS,
          ]),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_PREMEXT_RESULTS, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_REDUCED_FIXED,
          [
              OptimulaArticleConst.ARTICLE_SETTLEM_RESULTS,
              OptimulaArticleConst.ARTICLE_INCOMES_TAXWINS,
          ]),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_AGRWORK_TARGETS, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_AGRWORK_HOURS,
          [
              OptimulaArticleConst.ARTICLE_SETTLEM_AGRWORK,
              OptimulaArticleConst.ARTICLE_INCOMES_TAXBASE,
          ]),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_AGRTASK_TARGETS, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_AGRTASK_HOURS,
          [
              OptimulaArticleConst.ARTICLE_SETTLEM_AGRTASK,
              OptimulaArticleConst.ARTICLE_INCOMES_TAXBASE,
          ]),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_ALLOWCE_HOFFICE, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_ALLOWCE_HOURS,
          [
              OptimulaArticleConst.ARTICLE_SETTLEM_ALLOWCE,
              OptimulaArticleConst.ARTICLE_INCOMES_TAXFREE,
          ]),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_ALLOWCE_CLOTHRS, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_ALLOWCE_HOURS,
          [
              OptimulaArticleConst.ARTICLE_SETTLEM_ALLOWCE,
              OptimulaArticleConst.ARTICLE_INCOMES_TAXFREE,
          ]),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_ALLOWCE_CLOTDAY, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_ALLOWCE_DAILY,
          [
              OptimulaArticleConst.ARTICLE_SETTLEM_ALLOWCE,
              OptimulaArticleConst.ARTICLE_INCOMES_TAXFREE,
          ]),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_ALLOWCE_MEALDAY, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_ALLDOWN_DAILY,
          [
              OptimulaArticleConst.ARTICLE_SETTLEM_ALLOWCE,
              OptimulaArticleConst.ARTICLE_INCOMES_TAXFREE,
          ]),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_OFFWORK_TARGETS, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_OFFWORK_HOURS,
          [
              OptimulaArticleConst.ARTICLE_SETTLEM_OFFWORK,
              OptimulaArticleConst.ARTICLE_INCOMES_TAXBASE,
          ]),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_OFFTASK_TARGETS, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_OFFTASK_HOURS,
          [
              OptimulaArticleConst.ARTICLE_SETTLEM_OFFTASK,
              OptimulaArticleConst.ARTICLE_INCOMES_TAXBASE,
          ]),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_OFFSETS_HOFFICE, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_OFFSETS_HFULL,
          [
              OptimulaArticleConst.ARTICLE_SETTLEM_OFFSETS,
              OptimulaArticleConst.ARTICLE_INCOMES_TAXFREE,
          ]),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_OFFSETS_CLOTHRS, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_OFFSETS_HOURS,
          [
              OptimulaArticleConst.ARTICLE_SETTLEM_OFFSETS,
              OptimulaArticleConst.ARTICLE_INCOMES_TAXFREE,
          ]),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_OFFSETS_CLOTDAY, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_OFFSETS_DAILY,
          [
              OptimulaArticleConst.ARTICLE_SETTLEM_OFFSETS,
              OptimulaArticleConst.ARTICLE_INCOMES_TAXFREE,
          ]),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_OFFSETS_MEALDAY, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_OFFDOWN_DAILY,
          [
              OptimulaArticleConst.ARTICLE_SETTLEM_OFFSETS,
              OptimulaArticleConst.ARTICLE_INCOMES_TAXFREE,
          ]),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_SETTLEM_TARGETS, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_SETTLEM_TARGETS,
          []),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_SETTLEM_TARNETT, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_SETTLEM_TARNETT,
          []),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_SETTLEM_ALLOWCE, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_SETTLEM_ALLOWCE,
          []),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_SETTLEM_ALLNETT, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_SETTLEM_ALLNETT,
          []),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_SETTLEM_AGRWORK, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_SETTLEM_AGRWORK,
          []),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_SETTLEM_AGRTASK, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_SETTLEM_AGRTASK,
          []),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_SETTLEM_OFFSETS, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_SETTLEM_OFFSETS,
          []),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_SETTLEM_OFFWORK, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_SETTLEM_OFFWORK,
          []),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_SETTLEM_OFFTASK, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_SETTLEM_OFFTASK,
          []),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_SETTLEM_RESULTS, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_SETTLEM_RESULTS,
          []),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_SETTLEM_RESNETT, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_SETTLEM_RESNETT,
          []),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_INCOMES_TAXFREE, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_INCOMES_TAXFREE,
          [
              OptimulaArticleConst.ARTICLE_INCOMES_SUMMARY,
          ]),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_INCOMES_TAXBASE, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_INCOMES_TAXBASE,
          [
              OptimulaArticleConst.ARTICLE_INCOMES_SUMMARY,
          ]),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_INCOMES_TAXWINS, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_INCOMES_TAXWINS,
          [
              OptimulaArticleConst.ARTICLE_INCOMES_SUMMARY,
          ]),
        new ProviderRecord(OptimulaArticleConst.ARTICLE_INCOMES_SUMMARY, OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS, OptimulaConceptConst.CONCEPT_INCOMES_SUMMARY,
          []),
    ];

    override providers: Map<CODE, IArticleSpecProvider> = ArticleSpecFactory.BuildProvidersFromRecords(this.providersConfig);

    constructor() {
        super();
    }

}

