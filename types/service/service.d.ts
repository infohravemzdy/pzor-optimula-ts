import { ServiceProcezor } from 'hravemzdy.procezor';
export declare enum OptimulaServiceVersion {
    OPTIMULA_VERSION_SCM = 100,
    OPTIMULA_VERSION_EPS = 200,
    OPTIMULA_VERSION_PUZZLE = 300
}
export declare class ServiceOptimula extends ServiceProcezor {
    private static readonly ARTICLE_DEFAULT_SEQUENS;
    private static readonly TEST_CALCS_ARTICLE;
    constructor();
    BuildArticleFactory(): boolean;
    BuildConceptFactory(): boolean;
}
