"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceOptimula = exports.OptimulaServiceVersion = void 0;
var hravemzdy_procezor_1 = require("hravemzdy.procezor");
var ArticlesConst_1 = require("../registry_constants/ArticlesConst");
var ArticlesFactory_1 = require("../registry_factories/ArticlesFactory");
var ConceptsFactory_1 = require("../registry_factories/ConceptsFactory");
var hravemzdy_procezor_2 = require("hravemzdy.procezor");
var cli_1 = require("typings/dist/support/cli");
var OptimulaServiceVersion;
(function (OptimulaServiceVersion) {
    OptimulaServiceVersion[OptimulaServiceVersion["OPTIMULA_VERSION_SCM"] = 100] = "OPTIMULA_VERSION_SCM";
    OptimulaServiceVersion[OptimulaServiceVersion["OPTIMULA_VERSION_EPS"] = 200] = "OPTIMULA_VERSION_EPS";
    OptimulaServiceVersion[OptimulaServiceVersion["OPTIMULA_VERSION_PUZZLE"] = 300] = "OPTIMULA_VERSION_PUZZLE";
})(OptimulaServiceVersion = exports.OptimulaServiceVersion || (exports.OptimulaServiceVersion = {}));
var ServiceOptimula = /** @class */ (function (_super) {
    __extends(ServiceOptimula, _super);
    function ServiceOptimula() {
        var _this = _super.call(this, OptimulaServiceVersion.OPTIMULA_VERSION_SCM, ServiceOptimula.TEST_CALCS_ARTICLE) || this;
        var buildSuccess = _this.BuildFactories();
        if (buildSuccess === false) {
            (0, cli_1.logError)("Version: ".concat(_this.version, ", build factories failed"));
        }
        return _this;
    }
    ServiceOptimula.prototype.BuildArticleFactory = function () {
        this.ArticleFactory = new ArticlesFactory_1.OptimulaArticleFactory();
        return true;
    };
    ServiceOptimula.prototype.BuildConceptFactory = function () {
        this.ConceptFactory = new ConceptsFactory_1.OptimulaConceptFactory();
        return true;
    };
    ServiceOptimula.ARTICLE_DEFAULT_SEQUENS = 0;
    ServiceOptimula.TEST_CALCS_ARTICLE = [
        hravemzdy_procezor_2.ArticleCode.get(ArticlesConst_1.OptimulaArticleConst.ARTICLE_SETTLEM_TARGETS),
        hravemzdy_procezor_2.ArticleCode.get(ArticlesConst_1.OptimulaArticleConst.ARTICLE_SETTLEM_RESULTS),
        hravemzdy_procezor_2.ArticleCode.get(ArticlesConst_1.OptimulaArticleConst.ARTICLE_SETTLEM_ALLOWCE),
        hravemzdy_procezor_2.ArticleCode.get(ArticlesConst_1.OptimulaArticleConst.ARTICLE_SETTLEM_AGRWORK),
        hravemzdy_procezor_2.ArticleCode.get(ArticlesConst_1.OptimulaArticleConst.ARTICLE_INCOMES_TAXFREE),
        hravemzdy_procezor_2.ArticleCode.get(ArticlesConst_1.OptimulaArticleConst.ARTICLE_INCOMES_TAXBASE),
        hravemzdy_procezor_2.ArticleCode.get(ArticlesConst_1.OptimulaArticleConst.ARTICLE_INCOMES_TAXWINS),
        hravemzdy_procezor_2.ArticleCode.get(ArticlesConst_1.OptimulaArticleConst.ARTICLE_INCOMES_SUMMARY),
    ];
    return ServiceOptimula;
}(hravemzdy_procezor_1.ServiceProcezor));
exports.ServiceOptimula = ServiceOptimula;
//# sourceMappingURL=service.js.map