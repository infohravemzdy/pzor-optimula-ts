import { NumberToGeneratorFunc, OptimulaGenerator, ParseValueFunc } from "./OptimulaGenerator";
import { IBundleProps, IPeriod } from "hravemzdy.legalios";
import {
  ArticleCode,
  ConceptCode,
  ContractCode,
  ITermTarget,
  MonthCode,
  PositionCode,
  VariantCode
} from "hravemzdy.procezor";
import {
  AgrtaskHoursTarget,
  AgrworkHoursTarget,
  AlldownDailyTarget,
  AllowceDailyTarget,
  AllowceMfullTarget,
  OptimusNettoTarget,
  ReducedNettoTarget,
  TimeactualWorkTarget,
  TimesheetsPlanTarget, TimesheetsWorkTarget
} from "../../proj/registry_providers/targets";
import { OptimulaArticleConst } from "../../proj/registry_constants/ArticlesConst";
import { OptimulaConceptConst } from "../../proj/registry_constants/ConceptsCode";

export class OptimulaPuzzleGenerator extends OptimulaGenerator {
  constructor(genId: number, genName: string, genNumb: string) {
    super(genId, genName, genNumb);
  }
  static ParseSpec(genId: number, specString: string): OptimulaPuzzleGenerator {
    const specDefValues: string[] = specString.split(';');
    if (specDefValues.length < 1) {
      return new OptimulaPuzzleGenerator(genId, "Unknownn", "Unknownn");
    }
    if (specDefValues.length < 2) {
      return new OptimulaPuzzleGenerator(genId, "Unknownn", specDefValues[0]);
    }
    const gen = new OptimulaPuzzleGenerator(genId, specDefValues[1], specDefValues[0]);

    const specParser: ParseValueFunc[] = [
      OptimulaGenerator.ParseIntNumber,   //   1  //Evideční číslo  	101
      OptimulaGenerator.ParseNANothing,   //   2  //Jméno a příjmení 	Drahota Jakub
      OptimulaGenerator.ParseNANothing,   //   3  //Mzdové období 	    202201
      OptimulaGenerator.ParseDecNumber,   //   4  //Celková částka v čistém
      OptimulaGenerator.ParseDecNumber,   //   5  //ODMĚNY
      OptimulaGenerator.ParseDecNumber,   //   6  //Ošatné/den
      OptimulaGenerator.ParseDecNumber,   //   7  //Home office/měs.
      OptimulaGenerator.ParseDecNumber,   //   8  //Strav.paušál/den
      OptimulaGenerator.ParseDecNumber,   //   9  //DPP/měs.-základní
      OptimulaGenerator.ParseHrsNumber,   //  10  //DPP hodiny/měs.-základní
      OptimulaGenerator.ParseDecNumber,   //  11  //Sazba DPP/hod
      OptimulaGenerator.ParseDecNumber,   //  12  //DPČ/měs.-základní
      OptimulaGenerator.ParseHrsNumber,   //  13  //DPČ hodiny/měs.-základní
      OptimulaGenerator.ParseDecNumber,   //  14  //Sazba DPČ/hod
      OptimulaGenerator.ParseDecNumber,   //  15  //Odpracované dny
      OptimulaGenerator.ParseHrsNumber,   //  16  //Odpracované hodiny
      OptimulaGenerator.ParseHrsNumber,   //  17  //Fond
    ];
    const specIntValues: number[] = OptimulaGenerator.zipParse(specDefValues, specParser)
      .map(x => x[1](x[0]));

    const specGenerator: NumberToGeneratorFunc[] = [
        gen.WithGenerNothingVal,   //   1  //Evideční číslo  	101
        gen.WithGenerNothingVal,   //   2  //Jméno a příjmení 	Drahota Jakub
        gen.WithGenerNothingVal,   //   3  //Mzdové období 	    202201
        gen.WithFPremiumBaseVal,   //   4  //Celková částka v čistém
        gen.WithFPremiumPersVal,   //   5  //ODMĚNY
        gen.WithClothesDailyVal,   //   6  //Ošatné/den
        gen.WithHomeOffMonthVal,   //   7  //Home office/měs.
        gen.WithMealConDailyVal,   //   8  //Strav.paušál/den
        gen.WithAgrWorkLimitVal,   //   9  //DPP/měs.-základní
        gen.WithAgrHourLimitVal,   //  10  //DPP hodiny/měs.-základní
        gen.WithAgrWorkTarifVal,   //  11  //Sazba DPP/hod
        gen.WithAgtWorkLimitVal,   //  12  //DPČ/měs.-základní
        gen.WithAgtHourLimitVal,   //  13  //DPČ hodiny/měs.-základní
        gen.WithAgtWorkTarifVal,   //  14  //Sazba DPČ/hod
        gen.WithWorkSheetDayVal,   //  15  //Odpracované dny
        gen.WithWorkSheetHrsVal,   //  16  //Odpracované hodiny
        gen.WithTimeSheetHrsVal,   //  17  //Fond
    ];
    OptimulaPuzzleGenerator.zipGenerator(specIntValues, specGenerator).map(x => x[1](x[0]));

    return gen;
  }

  BuildImportCsvString(period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): string[] {
    const AgrWorkTarifVal = this.AgrWorkTarifFunc(this, period, ruleset, prevset);
    const AgrWorkRatioVal = this.AgrWorkRatioFunc(this, period, ruleset, prevset);
    const AgrHourLimitVal = this.AgrHourLimitFunc(this, period, ruleset, prevset);
    const AgrWorkLimitVal = this.AgrWorkLimitFunc(this, period, ruleset, prevset);
    const AgtWorkTarifVal = this.AgtWorkTarifFunc(this, period, ruleset, prevset);
    const AgtWorkRatioVal = this.AgtWorkRatioFunc(this, period, ruleset, prevset);
    const AgtHourLimitVal = this.AgtHourLimitFunc(this, period, ruleset, prevset);
    const AgtWorkLimitVal = this.AgtWorkLimitFunc(this, period, ruleset, prevset);
    const ClothesHoursVal = this.ClothesHoursFunc(this, period, ruleset, prevset);
    const ClothesDailyVal = this.ClothesDailyFunc(this, period, ruleset, prevset);
    const MealConDailyVal = this.MealConDailyFunc(this, period, ruleset, prevset);
    const HomeOffMonthVal = this.HomeOffMonthFunc(this, period, ruleset, prevset);
    const HomeOffTarifVal = this.HomeOffTarifFunc(this, period, ruleset, prevset);
    const HomeOffHoursVal = this.HomeOffHoursFunc(this, period, ruleset, prevset);

    const MSalaryAwardVal = this.MSalaryAwardFunc(this, period, ruleset, prevset);
    const HSalaryAwardVal = this.HSalaryAwardFunc(this, period, ruleset, prevset);
    const FPremiumBaseVal = this.FPremiumBaseFunc(this, period, ruleset, prevset);
    const FPremiumBossVal = this.FPremiumBossFunc(this, period, ruleset, prevset);
    const FPremiumPersVal = this.FPremiumPersFunc(this, period, ruleset, prevset);
    const FullSheetHrsVal = this.FullSheetHrsFunc(this, period, ruleset, prevset);
    const TimeSheetHrsVal = this.TimeSheetHrsFunc(this, period, ruleset, prevset);
    const HoliSheetHrsVal = this.HoliSheetHrsFunc(this, period, ruleset, prevset);
    const WorkSheetHrsVal = this.WorkSheetHrsFunc(this, period, ruleset, prevset);
    const WorkSheetDayVal = this.WorkSheetDayFunc(this, period, ruleset, prevset);
    const OverSheetHrsVal = this.OverSheetHrsFunc(this, period, ruleset, prevset);
    const VacaRecomHrsVal = this.VacaRecomHrsFunc(this, period, ruleset, prevset);
    const PaidRecomHrsVal = this.PaidRecomHrsFunc(this, period, ruleset, prevset);
    const HoliRecomHrsVal = this.HoliRecomHrsFunc(this, period, ruleset, prevset);
    const OverAllowHrsVal = this.OverAllowHrsFunc(this, period, ruleset, prevset);
    const OverAllowRioVal = this.OverAllowRioFunc(this, period, ruleset, prevset);
    const RestAllowHrsVal = this.RestAllowHrsFunc(this, period, ruleset, prevset);
    const RestAllowRioVal = this.RestAllowRioFunc(this, period, ruleset, prevset);
    const WendAllowHrsVal = this.WendAllowHrsFunc(this, period, ruleset, prevset);
    const WendAllowRioVal = this.WendAllowRioFunc(this, period, ruleset, prevset);
    const NighAllowHrsVal = this.NighAllowHrsFunc(this, period, ruleset, prevset);
    const NighAllowRioVal = this.NighAllowRioFunc(this, period, ruleset, prevset);
    const HoliAllowHrsVal = this.HoliAllowHrsFunc(this, period, ruleset, prevset);
    const HoliAllowRioVal = this.HoliAllowRioFunc(this, period, ruleset, prevset);
    const QClothesBaseVal = this.QClothesBaseFunc(this, period, ruleset, prevset);
    const QHOfficeBaseVal = this.QHOfficeBaseFunc(this, period, ruleset, prevset);
    const QAgrWorkBaseVal = this.QAgrWorkBaseFunc(this, period, ruleset, prevset);
    const QSumWorkHourVal = this.QSumWorkHourFunc(this, period, ruleset, prevset);

    const valuesList: string[] = [
      this.genNumb, // A
      this.genName,   // B
      `${period.code}`, // C
      `${OptimulaGenerator.CcyFormatIntX100(FPremiumBaseVal)}`, // D//Celková částka v čistém
      `${OptimulaGenerator.CcyFormatIntX100(FPremiumPersVal)}`, // E//ODMĚNY
      `${OptimulaGenerator.CcyFormatIntX100(ClothesDailyVal)}`, // F//Ošatné/den
      `${OptimulaGenerator.CcyFormatIntX100(HomeOffMonthVal)}`, // G//Home office/měs.
      `${OptimulaGenerator.CcyFormatIntX100(MealConDailyVal)}`, // H//Strav.paušál/den
      `${OptimulaGenerator.CcyFormatIntX100(AgrWorkLimitVal)}`, // I//DPP/měs.-základní
      `${OptimulaGenerator.HrsFormatIntX060(AgrHourLimitVal)}`, // J//DPP hodiny/měs.-základní
      `${OptimulaGenerator.CcyFormatIntX100(AgrWorkTarifVal)}`, // K//Sazba DPP/hod
      `${OptimulaGenerator.CcyFormatIntX100(AgtWorkLimitVal)}`, // L//DPČ/měs.-základní
      `${OptimulaGenerator.HrsFormatIntX060(AgtHourLimitVal)}`, // M  //DPČ hodiny/měs.-základní
      `${OptimulaGenerator.CcyFormatIntX100(AgtWorkTarifVal)}`, // N  //Sazba DPČ/hod
      `${OptimulaGenerator.DayFormatIntX100(WorkSheetDayVal)}`, // O  //Odpracované dny
      `${OptimulaGenerator.HrsFormatIntX060(WorkSheetHrsVal)}`, // P  //Odpracované hodiny
      `${OptimulaGenerator.HrsFormatIntX060(TimeSheetHrsVal)}`, // Q  //Fond
    ];
    if (WorkSheetHrsVal !== 0) {
      const importResult = [valuesList.join(';') + ";"];

      return importResult;
    }
    return [];
  }

  BuildImportXlsString(period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): string[] {
    const AgrWorkTarifVal = this.AgrWorkTarifFunc(this, period, ruleset, prevset);
    const AgrWorkRatioVal = this.AgrWorkRatioFunc(this, period, ruleset, prevset);
    const AgrHourLimitVal = this.AgrHourLimitFunc(this, period, ruleset, prevset);
    const AgrWorkLimitVal = this.AgrWorkLimitFunc(this, period, ruleset, prevset);
    const AgtWorkTarifVal = this.AgtWorkTarifFunc(this, period, ruleset, prevset);
    const AgtWorkRatioVal = this.AgtWorkRatioFunc(this, period, ruleset, prevset);
    const AgtHourLimitVal = this.AgtHourLimitFunc(this, period, ruleset, prevset);
    const AgtWorkLimitVal = this.AgtWorkLimitFunc(this, period, ruleset, prevset);
    const ClothesHoursVal = this.ClothesHoursFunc(this, period, ruleset, prevset);
    const ClothesDailyVal = this.ClothesDailyFunc(this, period, ruleset, prevset);
    const MealConDailyVal = this.MealConDailyFunc(this, period, ruleset, prevset);
    const HomeOffMonthVal = this.HomeOffMonthFunc(this, period, ruleset, prevset);
    const HomeOffTarifVal = this.HomeOffTarifFunc(this, period, ruleset, prevset);
    const HomeOffHoursVal = this.HomeOffHoursFunc(this, period, ruleset, prevset);

    const MSalaryAwardVal = this.MSalaryAwardFunc(this, period, ruleset, prevset);
    const HSalaryAwardVal = this.HSalaryAwardFunc(this, period, ruleset, prevset);
    const FPremiumBaseVal = this.FPremiumBaseFunc(this, period, ruleset, prevset);
    const FPremiumBossVal = this.FPremiumBossFunc(this, period, ruleset, prevset);
    const FPremiumPersVal = this.FPremiumPersFunc(this, period, ruleset, prevset);
    const FullSheetHrsVal = this.FullSheetHrsFunc(this, period, ruleset, prevset);
    const TimeSheetHrsVal = this.TimeSheetHrsFunc(this, period, ruleset, prevset);
    const HoliSheetHrsVal = this.HoliSheetHrsFunc(this, period, ruleset, prevset);
    const WorkSheetHrsVal = this.WorkSheetHrsFunc(this, period, ruleset, prevset);
    const WorkSheetDayVal = this.WorkSheetDayFunc(this, period, ruleset, prevset);
    const OverSheetHrsVal = this.OverSheetHrsFunc(this, period, ruleset, prevset);
    const VacaRecomHrsVal = this.VacaRecomHrsFunc(this, period, ruleset, prevset);
    const PaidRecomHrsVal = this.PaidRecomHrsFunc(this, period, ruleset, prevset);
    const HoliRecomHrsVal = this.HoliRecomHrsFunc(this, period, ruleset, prevset);
    const OverAllowHrsVal = this.OverAllowHrsFunc(this, period, ruleset, prevset);
    const OverAllowRioVal = this.OverAllowRioFunc(this, period, ruleset, prevset);
    const RestAllowHrsVal = this.RestAllowHrsFunc(this, period, ruleset, prevset);
    const RestAllowRioVal = this.RestAllowRioFunc(this, period, ruleset, prevset);
    const WendAllowHrsVal = this.WendAllowHrsFunc(this, period, ruleset, prevset);
    const WendAllowRioVal = this.WendAllowRioFunc(this, period, ruleset, prevset);
    const NighAllowHrsVal = this.NighAllowHrsFunc(this, period, ruleset, prevset);
    const NighAllowRioVal = this.NighAllowRioFunc(this, period, ruleset, prevset);
    const HoliAllowHrsVal = this.HoliAllowHrsFunc(this, period, ruleset, prevset);
    const HoliAllowRioVal = this.HoliAllowRioFunc(this, period, ruleset, prevset);
    const QClothesBaseVal = this.QClothesBaseFunc(this, period, ruleset, prevset);
    const QHOfficeBaseVal = this.QHOfficeBaseFunc(this, period, ruleset, prevset);
    const QAgrWorkBaseVal = this.QAgrWorkBaseFunc(this, period, ruleset, prevset);
    const QSumWorkHourVal = this.QSumWorkHourFunc(this, period, ruleset, prevset);

    const valuesList: string[] = [
        this.genNumb, // A
        this.genName,   // B
        `${period.code}`, // C
        `${OptimulaGenerator.CcyFormatIntX100(FPremiumBaseVal)}`, // D//Celková částka v čistém
        `${OptimulaGenerator.CcyFormatIntX100(FPremiumPersVal)}`, // E//ODMĚNY
        `${OptimulaGenerator.CcyFormatIntX100(ClothesDailyVal)}`, // F//Ošatné/den
        `${OptimulaGenerator.CcyFormatIntX100(HomeOffMonthVal)}`, // G//Home office/měs.
        `${OptimulaGenerator.CcyFormatIntX100(MealConDailyVal)}`, // H//Strav.paušál/den
        `${OptimulaGenerator.CcyFormatIntX100(AgrWorkLimitVal)}`, // I//DPP/měs.-základní
        `${OptimulaGenerator.HrsFormatIntX060(AgrHourLimitVal)}`, // J//DPP hodiny/měs.-základní
        `${OptimulaGenerator.CcyFormatIntX100(AgrWorkTarifVal)}`, // K//Sazba DPP/hod
        `${OptimulaGenerator.CcyFormatIntX100(AgtWorkLimitVal)}`, // L//DPČ/měs.-základní
        `${OptimulaGenerator.HrsFormatIntX060(AgtHourLimitVal)}`, // M  //DPČ hodiny/měs.-základní
        `${OptimulaGenerator.CcyFormatIntX100(AgtWorkTarifVal)}`, // N  //Sazba DPČ/hod
        `${OptimulaGenerator.DayFormatIntX100(WorkSheetDayVal)}`, // O  //Odpracované dny
        `${OptimulaGenerator.HrsFormatIntX060(WorkSheetHrsVal)}`, // P  //Odpracované hodiny
        `${OptimulaGenerator.HrsFormatIntX060(TimeSheetHrsVal)}`, // Q  //Fond
    ];
    if (WorkSheetHrsVal !== 0) {
      const importResult = [valuesList.join('\t')];

      return importResult;
    }
    return [];
  }

  BuildSpecTargets(period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): Iterable<ITermTarget> {
    const montCode = MonthCode.getWithPeriod(period);

    const CONTRACT_NULL: number = 0;
    const POSITION_NULL: number = 0;

    const contractEmp = ContractCode.get(CONTRACT_NULL);
    const positionEmp = PositionCode.get(POSITION_NULL);
    const variant1Emp = VariantCode.get(1);

    const AgrWorkTarifVal = this.AgrWorkTarifFunc(this, period, ruleset, prevset); // D//Celková částka v čistém
    const AgrHourLimitVal = this.AgrHourLimitFunc(this, period, ruleset, prevset); // E//ODMĚNY
    const AgrWorkLimitVal = this.AgrWorkLimitFunc(this, period, ruleset, prevset); // F//Ošatné/den
    const AgtWorkTarifVal = this.AgtWorkTarifFunc(this, period, ruleset, prevset); // G//Home office/měs.
    const AgtHourLimitVal = this.AgtHourLimitFunc(this, period, ruleset, prevset); // H//Strav.paušál/den
    const AgtWorkLimitVal = this.AgtWorkLimitFunc(this, period, ruleset, prevset); // I//DPP/měs.-základní
    const ClothesDailyVal = this.ClothesDailyFunc(this, period, ruleset, prevset); // J//DPP hodiny/měs.-základní
    const MealConDailyVal = this.MealConDailyFunc(this, period, ruleset, prevset); // K//Sazba DPP/hod
    const HomeOffMonthVal = this.HomeOffMonthFunc(this, period, ruleset, prevset); // L//DPČ/měs.-základní
    const FPremiumBaseVal = this.FPremiumBaseFunc(this, period, ruleset, prevset); // M  //DPČ hodiny/měs.-základní
    const FPremiumPersVal = this.FPremiumPersFunc(this, period, ruleset, prevset); // N  //Sazba DPČ/hod
    const WorkSheetDayVal = this.WorkSheetDayFunc(this, period, ruleset, prevset); // O  //Odpracované dny
    const WorkSheetHrsVal = this.WorkSheetHrsFunc(this, period, ruleset, prevset); // P  //Odpracované hodiny
    const TimeSheetHrsVal = this.TimeSheetHrsFunc(this, period, ruleset, prevset); // Q  //Fond

    // ContractTimePlan	CONTRACT_TIME_PLAN
    const contractTimePlan = new TimesheetsPlanTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_TIMESHEETS_PLAN),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_TIMESHEETS_PLAN), TimeSheetHrsVal);
    // ContractTimeWork	CONTRACT_TIME_WORK
    const contractTimeWork = new TimesheetsWorkTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_TIMESHEETS_WORK),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_TIMESHEETS_WORK), TimeSheetHrsVal, 0);
    // TimeactualWork	TIMEACTUAL_WORK
    const contractTimeActa = new TimeactualWorkTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_TIMEACTUAL_WORK),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_TIMEACTUAL_WORK),
      WorkSheetHrsVal, WorkSheetDayVal, 0);
    // OptimusNetto		OPTIMUS_NETTO
    const optPremiumBase = new OptimusNettoTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_PREMIUM_TARGETS),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_OPTIMUS_NETTO),
      FPremiumBaseVal, FPremiumPersVal);
    // ReducedNetto		REDUCED_NETTO
    const redPremiumBase = new ReducedNettoTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_PREMIUM_RESULTS),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_REDUCED_NETTO),
      ArticleCode.get(OptimulaArticleConst.ARTICLE_PREMIUM_TARGETS));
    // AgrworkHours		AGRWORK_HOURS
    const allowceAgrwork = new AgrworkHoursTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_AGRWORK_TARGETS),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_AGRWORK_HOURS),
      AgrWorkTarifVal, 0, AgrWorkLimitVal, AgrHourLimitVal);
    // AgtworkHours		AGRTASK_HOURS
    const allowceAgrtask = new AgrtaskHoursTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_AGRTASK_TARGETS),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_AGRTASK_HOURS),
      AgtWorkTarifVal, 0, AgtWorkLimitVal, AgtHourLimitVal);
    // AllowceHfull		ALLOWCE_HFULL
    const allowceHOffice = new AllowceMfullTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_ALLOWCE_HOFFICE),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_ALLOWCE_MFULL),
      HomeOffMonthVal);
    // AllowceDaily		ALLOWCE_DAILY
    const allowceClotDay = new AllowceDailyTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_ALLOWCE_CLOTDAY),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_ALLOWCE_DAILY),
      ClothesDailyVal);
    // AlldownDaily		ALLDOWN_DAILY
    const allowceMealDay = new AlldownDailyTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_ALLOWCE_MEALDAY),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_ALLDOWN_DAILY),
      MealConDailyVal);

    let targets: ITermTarget[] = [
      contractTimePlan,
      contractTimeWork,
      contractTimeActa,
    ];

    if (FPremiumBaseVal !== 0)
    {
      targets = Array.from(targets).concat(optPremiumBase, redPremiumBase);
    }
    if (AgrWorkTarifVal !== 0)
    {
      targets = Array.from(targets).concat(allowceAgrwork);
    }
    if (AgtWorkTarifVal !== 0)
    {
      targets = Array.from(targets).concat(allowceAgrtask);
    }
    if (HomeOffMonthVal !== 0)
    {
      targets = Array.from(targets).concat(allowceHOffice);
    }
    if (ClothesDailyVal !== 0)
    {
      targets = Array.from(targets).concat(allowceClotDay);
    }
    if (MealConDailyVal !== 0)
    {
      targets = Array.from(targets).concat(allowceMealDay);
    }

    return targets;
  }
}
