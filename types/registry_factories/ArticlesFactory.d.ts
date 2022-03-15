import { ArticleSpecFactory, CODE, IArticleSpecProvider } from "hravemzdy.procezor";
export declare class OptimulaArticleFactory extends ArticleSpecFactory {
    private static ARTICLE_DEFAULT_SEQUENS;
    private providersConfig;
    providers: Map<CODE, IArticleSpecProvider>;
    constructor();
}
