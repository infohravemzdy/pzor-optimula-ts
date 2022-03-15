import { ServiceProcezor } from 'hravemzdy.procezor';
import {OptimulaArticleConst} from "../registry_constants/ArticlesConst";
import {OptimulaArticleFactory} from "../registry_factories/ArticlesFactory";
import {OptimulaConceptFactory} from "../registry_factories/ConceptsFactory";
import {ArticleCode} from "hravemzdy.procezor";
import {logError} from "typings/dist/support/cli";


export enum OptimulaServiceVersion {
    OPTIMULA_VERSION_SCM = 100,
    OPTIMULA_VERSION_EPS = 200,
    OPTIMULA_VERSION_PUZZLE = 300,
}

export class ServiceOptimula extends ServiceProcezor {
    private static readonly ARTICLE_DEFAULT_SEQUENS: number = 0

    private static readonly TEST_CALCS_ARTICLE: Iterable<ArticleCode> = [
            ArticleCode.get(OptimulaArticleConst.ARTICLE_SETTLEM_TARGETS),
            ArticleCode.get(OptimulaArticleConst.ARTICLE_SETTLEM_RESULTS),
            ArticleCode.get(OptimulaArticleConst.ARTICLE_SETTLEM_ALLOWCE),
            ArticleCode.get(OptimulaArticleConst.ARTICLE_SETTLEM_AGRWORK),
            ArticleCode.get(OptimulaArticleConst.ARTICLE_INCOMES_TAXFREE),
            ArticleCode.get(OptimulaArticleConst.ARTICLE_INCOMES_TAXBASE),
            ArticleCode.get(OptimulaArticleConst.ARTICLE_INCOMES_TAXWINS),
            ArticleCode.get(OptimulaArticleConst.ARTICLE_INCOMES_SUMMARY),
        ];

    constructor() {
        super(OptimulaServiceVersion.OPTIMULA_VERSION_SCM, ServiceOptimula.TEST_CALCS_ARTICLE);

         const buildSuccess = this.BuildFactories();
         if (buildSuccess === false) {
             logError(`Version: ${this.version}, build factories failed`);
         }
    }

    BuildArticleFactory(): boolean {
        this.ArticleFactory = new OptimulaArticleFactory()
         return true;
    }
    BuildConceptFactory(): boolean {
        this.ConceptFactory = new OptimulaConceptFactory()
        return true;
    }
}