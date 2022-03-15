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
exports.OptimulaArticleFactory = void 0;
var hravemzdy_procezor_1 = require("hravemzdy.procezor");
var OptimulaArticleFactory = /** @class */ (function (_super) {
    __extends(OptimulaArticleFactory, _super);
    function OptimulaArticleFactory() {
        var _this = _super.call(this) || this;
        _this.providersConfig = [];
        _this.providers = hravemzdy_procezor_1.ArticleSpecFactory.BuildProvidersFromRecords(_this.providersConfig);
        return _this;
    }
    OptimulaArticleFactory.ARTICLE_DEFAULT_SEQUENS = 0;
    return OptimulaArticleFactory;
}(hravemzdy_procezor_1.ArticleSpecFactory));
exports.OptimulaArticleFactory = OptimulaArticleFactory;
//# sourceMappingURL=ArticlesFactory.js.map