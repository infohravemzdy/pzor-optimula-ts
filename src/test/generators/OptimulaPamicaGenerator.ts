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
  AllowceDailyTarget, AllowceHfullTarget, AllowceHoursTarget,
  AllowceMfullTarget, OptimusBasisTarget, OptimusFixedTarget, OptimusHoursTarget,
  OptimusNettoTarget, PaymentBasisTarget, ReducedBasisTarget, ReducedFixedTarget, ReducedHoursTarget,
  ReducedNettoTarget,
  TimeactualWorkTarget,
  TimesheetsPlanTarget, TimesheetsWorkTarget
} from "../../proj/registry_providers/targets";
import { OptimulaArticleConst } from "../../proj/registry_constants/ArticlesConst";
import { OptimulaConceptConst } from "../../proj/registry_constants/ConceptsCode";


export class OptimulaPamicaGenerator extends OptimulaGenerator {
  constructor(genId: number, genName: string, genNumb: string) {
    super(genId, genName, genNumb);
  }

  static ParseSpec(genId: number, specString: string): OptimulaPamicaGenerator {
    const specDefValues: string[] = specString.split(';');
    if (specDefValues.length < 1) {
      return new OptimulaPamicaGenerator(genId, "Unknownn", "Unknownn");
    }
    if (specDefValues.length < 2) {
      return new OptimulaPamicaGenerator(genId, "Unknownn", specDefValues[0]);
    }
    const gen = new OptimulaPamicaGenerator(genId, specDefValues[1], specDefValues[0]);

    const specParser: ParseValueFunc[] = [
      OptimulaGenerator.ParseIntNumber,   //   1  EmployeeNumb	101
      OptimulaGenerator.ParseNANothing,   //   2  EmployeeName	Drahota Jakub
      OptimulaGenerator.ParseNANothing,   //   3  PeriodName  	202201
      OptimulaGenerator.ParseDecNumber,   //   3  AgrWorkTarif	105,00
      OptimulaGenerator.ParseDecNumber,   //   4  AgrWorkRatio	0,14
      OptimulaGenerator.ParseHrsNumber,   //   5  AgrHourLimit	0,00
      OptimulaGenerator.ParseDecNumber,   //   6  AgrWorkLimit	0,00
      OptimulaGenerator.ParseDecNumber,   //   7  ClothesHours	11,17
      OptimulaGenerator.ParseDecNumber,   //   8  ClothesDaily	57,00
      OptimulaGenerator.ParseDecNumber,   //   9  MealConDaily	57,00
      OptimulaGenerator.ParseDecNumber,   //  10  HomeOffTarif	0,00
      OptimulaGenerator.ParseHrsNumber,   //  11  HomeOffHours	0,00
      OptimulaGenerator.ParseDecNumber,   //  12  MSalaryAward	8 000,00
      OptimulaGenerator.ParseDecNumber,   //  13  HSalaryAward	0,00
      OptimulaGenerator.ParseDecNumber,   //  14  FPremiumBase	0,00
      OptimulaGenerator.ParseDecNumber,   //  15  FPremiumBoss	0,00
      OptimulaGenerator.ParseDecNumber,   //  16  FPremiumPers	0,00
      OptimulaGenerator.ParseHrsNumber,   //  17  FullSheetHrs	176,00
      OptimulaGenerator.ParseHrsNumber,   //  18  TimeSheetHrs	176,00
      OptimulaGenerator.ParseHrsNumber,   //  19  HoliSheetHrs	0,00
      OptimulaGenerator.ParseHrsNumber,   //  20  WorkSheetHrs	96,00
      OptimulaGenerator.ParseDecNumber,   //  21  WorkSheetDay	12,00
      OptimulaGenerator.ParseHrsNumber,   //  22  OverSheetHrs	40,00
      OptimulaGenerator.ParseHrsNumber,   //  23  VacaRecomHrs	80,00
      OptimulaGenerator.ParseHrsNumber,   //  24  PaidRecomHrs	0,00
      OptimulaGenerator.ParseHrsNumber,   //  25  HoliRecomHrs	0,00
      OptimulaGenerator.ParseNANothing,   //  26  -----------
      OptimulaGenerator.ParseHrsNumber,   //  27  OverAllowHrs	40,00
      OptimulaGenerator.ParseDecNumber,   //  28  OverAllowRio	0,25
      OptimulaGenerator.ParseHrsNumber,   //  29  RestAllowHrs	0,00
      OptimulaGenerator.ParseDecNumber,   //  30  RestAllowRio	0,00
      OptimulaGenerator.ParseHrsNumber,   //  31  WendAllowHrs	0,00
      OptimulaGenerator.ParseDecNumber,   //  32  WendAllowRio	0,00
      OptimulaGenerator.ParseHrsNumber,   //  33  NighAllowHrs	18,25
      OptimulaGenerator.ParseDecNumber,   //  34  NighAllowRio	0,10
      OptimulaGenerator.ParseHrsNumber,   //  35  HoliAllowHrs	0,00
      OptimulaGenerator.ParseDecNumber,   //  36  HoliAllowRio	0,00
      OptimulaGenerator.ParseDecNumber,   //  37  QClothesBase	3 506,00
      OptimulaGenerator.ParseDecNumber,   //  38  QHOfficeBase	0,00
      OptimulaGenerator.ParseDecNumber,   //  39  QAgrWorkBase	8 852,00
      OptimulaGenerator.ParseDecNumber,   //  40  QSumWorkHour	912,08
    ];
    const specIntValues: number[] = OptimulaGenerator.zipParse(specDefValues, specParser)
      .map(x => x[1](x[0]));

    const specGenerator: NumberToGeneratorFunc[] = [
      gen.WithGenerNothingVal,   //   1  //Evideční číslo  	101
      gen.WithGenerNothingVal,   //   1  EmployeeNumb	101
      gen.WithGenerNothingVal,   //   2  EmployeeName	Drahota Jakub
      gen.WithGenerNothingVal,   //   3  PeriodName  	202201
      gen.WithAgrWorkTarifVal,   //   4  AgrWorkTarif	105,00
      gen.WithAgrWorkRatioVal,   //   5  AgrWorkRatio	0,14
      gen.WithAgrHourLimitVal,   //   6  AgrHourLimit	0,00
      gen.WithAgrWorkLimitVal,   //   7  AgrWorkLimit	0,00
      gen.WithClothesHoursVal,   //   8  ClothesHours	11,17
      gen.WithClothesDailyVal,   //   9  ClothesDaily	106,00
      gen.WithMealConDailyVal,   //  10  MealConDaily	106,00
      gen.WithHomeOffTarifVal,   //  11  HomeOffTarif	0,00
      gen.WithHomeOffHoursVal,   //  12  HomeOffHours	0,00
      gen.WithMSalaryAwardVal,   //  13  MSalaryAward	8 000,00
      gen.WithHSalaryAwardVal,   //  14  HSalaryAward	0,00
      gen.WithFPremiumBaseVal,   //  15  FPremiumBase	0,00
      gen.WithFPremiumBossVal,   //  16  FPremiumBoss	0,00
      gen.WithFPremiumPersVal,   //  17  FPremiumPers	0,00
      gen.WithFullSheetHrsVal,   //  18  FullSheetHrs	176,00
      gen.WithTimeSheetHrsVal,   //  19  TimeSheetHrs	176,00
      gen.WithHoliSheetHrsVal,   //  20  HoliSheetHrs	0,00
      gen.WithWorkSheetHrsVal,   //  21  WorkSheetHrs	96,00
      gen.WithWorkSheetDayVal,   //  22  WorkSheetDay	12,00
      gen.WithOverSheetHrsVal,   //  23  OverSheetHrs	40,00
      gen.WithVacaRecomHrsVal,   //  24  VacaRecomHrs	80,00
      gen.WithPaidRecomHrsVal,   //  25  PaidRecomHrs	0,00
      gen.WithHoliRecomHrsVal,   //  26  HoliRecomHrs	0,00
      gen.WithGenerNothingVal,   //  27  OverAllowHrs	40,00
      gen.WithGenerNothingVal,   //  28  OverAllowRio	0,25
      gen.WithGenerNothingVal,   //  29  RestAllowHrs	0,00
      gen.WithGenerNothingVal,   //  30  RestAllowRio	0,00
      gen.WithGenerNothingVal,   //  31  WendAllowHrs	0,00
      gen.WithGenerNothingVal,   //  32  WendAllowRio	0,00
      gen.WithGenerNothingVal,   //  33  NighAllowHrs	18,25
      gen.WithGenerNothingVal,   //  34  NighAllowRio	0,10
      gen.WithGenerNothingVal,   //  35  HoliAllowHrs	0,00
      gen.WithGenerNothingVal,   //  36  HoliAllowRio	0,00
      gen.WithGenerNothingVal,   //  37  QClothesBase	3 506,00
      gen.WithGenerNothingVal,   //  38  QHOfficeBase	0,00
      gen.WithGenerNothingVal,   //  39  QAgrWorkBase	8 852,00
      gen.WithGenerNothingVal,   //  40  QSumWorkHour	912,08
    ];
    OptimulaPamicaGenerator.zipGenerator(specIntValues, specGenerator).map(x => x[1](x[0]));

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
      `${OptimulaGenerator.CcyFormatIntX100(AgrWorkTarifVal)}`, // D
      `${OptimulaGenerator.NumFormatIntX100(AgrWorkRatioVal)}`, // E
      `${OptimulaGenerator.HrsFormatIntX060(AgrHourLimitVal)}`, // F
      `${OptimulaGenerator.NumFormatIntX100(AgrWorkLimitVal)}`, // G
      `${OptimulaGenerator.CcyFormatIntX100(ClothesHoursVal)}`, // H
      `${OptimulaGenerator.CcyFormatIntX100(ClothesDailyVal)}`, // I
      `${OptimulaGenerator.CcyFormatIntX100(MealConDailyVal)}`, // J
      `${OptimulaGenerator.CcyFormatIntX100(HomeOffTarifVal)}`, // K
      `${OptimulaGenerator.HrsFormatIntX060(HomeOffHoursVal)}`, // L
      `${OptimulaGenerator.CcyFormatIntX100(MSalaryAwardVal)}`, // M
      `${OptimulaGenerator.CcyFormatIntX100(HSalaryAwardVal)}`, // N
      `${OptimulaGenerator.CcyFormatIntX100(FPremiumBaseVal)}`, // O
      `${OptimulaGenerator.CcyFormatIntX100(FPremiumBossVal)}`, // P
      `${OptimulaGenerator.CcyFormatIntX100(FPremiumPersVal)}`, // Q
      `${OptimulaGenerator.HrsFormatIntX060(FullSheetHrsVal)}`, // R
      `${OptimulaGenerator.HrsFormatIntX060(TimeSheetHrsVal)}`, // S
      `${OptimulaGenerator.HrsFormatIntX060(HoliSheetHrsVal)}`, // T
      `${OptimulaGenerator.HrsFormatIntX060(WorkSheetHrsVal)}`, // U
      `${OptimulaGenerator.DayFormatIntX100(WorkSheetDayVal)}`, // V
      `${OptimulaGenerator.HrsFormatIntX060(OverSheetHrsVal)}`, // W
      `${OptimulaGenerator.HrsFormatIntX060(VacaRecomHrsVal)}`, // X
      `${OptimulaGenerator.HrsFormatIntX060(PaidRecomHrsVal)}`, // Y
      `${OptimulaGenerator.HrsFormatIntX060(HoliRecomHrsVal)}`, // Z
      `${OptimulaGenerator.HrsFormatIntX060(OverAllowHrsVal)}`, // AA
      `${OptimulaGenerator.CcyFormatIntX100(OverAllowRioVal)}`, // AB
      `${OptimulaGenerator.HrsFormatIntX060(RestAllowHrsVal)}`, // AC
      `${OptimulaGenerator.CcyFormatIntX100(RestAllowRioVal)}`, // AD
      `${OptimulaGenerator.HrsFormatIntX060(WendAllowHrsVal)}`, // AE
      `${OptimulaGenerator.CcyFormatIntX100(WendAllowRioVal)}`, // AF
      `${OptimulaGenerator.HrsFormatIntX060(NighAllowHrsVal)}`, // AG
      `${OptimulaGenerator.CcyFormatIntX100(NighAllowRioVal)}`, // AH
      `${OptimulaGenerator.HrsFormatIntX060(HoliAllowHrsVal)}`, // AI
      `${OptimulaGenerator.CcyFormatIntX100(HoliAllowRioVal)}`, // AJ
      `${OptimulaGenerator.CcyFormatIntX100(QClothesBaseVal)}`, // AK
      `${OptimulaGenerator.CcyFormatIntX100(QHOfficeBaseVal)}`, // AL
      `${OptimulaGenerator.CcyFormatIntX100(QAgrWorkBaseVal)}`, // AM
      `${OptimulaGenerator.CcyFormatIntX100(QSumWorkHourVal)}`, // AN
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
      `${OptimulaGenerator.CcyFormatIntX100(AgrWorkTarifVal)}`, // D
      `${OptimulaGenerator.NumFormatIntX100(AgrWorkRatioVal)}`, // E
      `${OptimulaGenerator.HrsFormatIntX060(AgrHourLimitVal)}`, // F
      `${OptimulaGenerator.NumFormatIntX100(AgrWorkLimitVal)}`, // G
      `${OptimulaGenerator.CcyFormatIntX100(ClothesHoursVal)}`, // H
      `${OptimulaGenerator.CcyFormatIntX100(ClothesDailyVal)}`, // I
      `${OptimulaGenerator.CcyFormatIntX100(MealConDailyVal)}`, // J
      `${OptimulaGenerator.CcyFormatIntX100(HomeOffTarifVal)}`, // K
      `${OptimulaGenerator.HrsFormatIntX060(HomeOffHoursVal)}`, // L
      `${OptimulaGenerator.CcyFormatIntX100(MSalaryAwardVal)}`, // M
      `${OptimulaGenerator.CcyFormatIntX100(HSalaryAwardVal)}`, // N
      `${OptimulaGenerator.CcyFormatIntX100(FPremiumBaseVal)}`, // O
      `${OptimulaGenerator.CcyFormatIntX100(FPremiumBossVal)}`, // P
      `${OptimulaGenerator.CcyFormatIntX100(FPremiumPersVal)}`, // Q
      `${OptimulaGenerator.HrsFormatIntX060(FullSheetHrsVal)}`, // R
      `${OptimulaGenerator.HrsFormatIntX060(TimeSheetHrsVal)}`, // S
      `${OptimulaGenerator.HrsFormatIntX060(HoliSheetHrsVal)}`, // T
      `${OptimulaGenerator.HrsFormatIntX060(WorkSheetHrsVal)}`, // U
      `${OptimulaGenerator.DayFormatIntX100(WorkSheetDayVal)}`, // V
      `${OptimulaGenerator.HrsFormatIntX060(OverSheetHrsVal)}`, // W
      `${OptimulaGenerator.HrsFormatIntX060(VacaRecomHrsVal)}`, // X
      `${OptimulaGenerator.HrsFormatIntX060(PaidRecomHrsVal)}`, // Y
      `${OptimulaGenerator.HrsFormatIntX060(HoliRecomHrsVal)}`, // Z
      `${OptimulaGenerator.HrsFormatIntX060(OverAllowHrsVal)}`, // AA
      `${OptimulaGenerator.CcyFormatIntX100(OverAllowRioVal)}`, // AB
      `${OptimulaGenerator.HrsFormatIntX060(RestAllowHrsVal)}`, // AC
      `${OptimulaGenerator.CcyFormatIntX100(RestAllowRioVal)}`, // AD
      `${OptimulaGenerator.HrsFormatIntX060(WendAllowHrsVal)}`, // AE
      `${OptimulaGenerator.CcyFormatIntX100(WendAllowRioVal)}`, // AF
      `${OptimulaGenerator.HrsFormatIntX060(NighAllowHrsVal)}`, // AG
      `${OptimulaGenerator.CcyFormatIntX100(NighAllowRioVal)}`, // AH
      `${OptimulaGenerator.HrsFormatIntX060(HoliAllowHrsVal)}`, // AI
      `${OptimulaGenerator.CcyFormatIntX100(HoliAllowRioVal)}`, // AJ
      `${OptimulaGenerator.CcyFormatIntX100(QClothesBaseVal)}`, // AK
      `${OptimulaGenerator.CcyFormatIntX100(QHOfficeBaseVal)}`, // AL
      `${OptimulaGenerator.CcyFormatIntX100(QAgrWorkBaseVal)}`, // AM
      `${OptimulaGenerator.CcyFormatIntX100(QSumWorkHourVal)}`, // AN
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

    const MSalaryBasisVal = 0;
    const MawardsBasisVal = this.MSalaryAwardFunc(this, period, ruleset, prevset);
    const HawardsBasisVal = this.HSalaryAwardFunc(this, period, ruleset, prevset);
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

    // ContractTimePlan	CONTRACT_TIME_PLAN
    const contractTimePlan = new TimesheetsPlanTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_TIMESHEETS_PLAN),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_TIMESHEETS_PLAN), FullSheetHrsVal);
    // ContractTimeWork	CONTRACT_TIME_WORK
    const contractTimeWork = new TimesheetsWorkTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_TIMESHEETS_WORK),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_TIMESHEETS_WORK), TimeSheetHrsVal, HoliSheetHrsVal);
    // TimeactualWork	TIMEACTUAL_WORK
    const contractTimeActa = new TimeactualWorkTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_TIMEACTUAL_WORK),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_TIMEACTUAL_WORK),
    WorkSheetHrsVal, WorkSheetDayVal, OverSheetHrsVal);
    // PaymentBasis		PAYMENT_BASIS
    const paymentMSalary = new PaymentBasisTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_MSALARY_TARGETS),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_PAYMENT_BASIS),
      MSalaryBasisVal);
    // OptimusBasis		OPTIMUS_BASIS
    const optimusMawards = new OptimusBasisTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_MAWARDS_TARGETS),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_OPTIMUS_BASIS),
      MawardsBasisVal);
    // ReducedBasis		REDUCED_BASIS
    const reducedMawards = new ReducedBasisTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_MAWARDS_RESULTS),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_REDUCED_BASIS),
      ArticleCode.get(OptimulaArticleConst.ARTICLE_MAWARDS_TARGETS));
    // OptimusHours		OPTIMUS_HOURS
    const optimusHawards = new OptimusHoursTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_HAWARDS_TARGETS),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_OPTIMUS_HOURS),
      HawardsBasisVal, WorkSheetHrsVal);
    // ReducedHours		REDUCED_HOURS
    const reducedHawards = new ReducedHoursTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_HAWARDS_RESULTS),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_REDUCED_HOURS),
      ArticleCode.get(OptimulaArticleConst.ARTICLE_HAWARDS_TARGETS));
    // OptimusFixed		OPTIMUS_FIXED
    const optPremiumBase = new OptimusFixedTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_PREMIUM_TARGETS),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_OPTIMUS_FIXED),
      FPremiumBaseVal);
    const optPremiumBoss = new OptimusFixedTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_PREMADV_TARGETS),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_OPTIMUS_FIXED),
      FPremiumBossVal);
    const optPremiumPers = new OptimusFixedTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_PREMEXT_TARGETS),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_OPTIMUS_FIXED),
      FPremiumPersVal);
    // ReducedFixed		REDUCED_FIXED
    const redPremiumBase = new ReducedFixedTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_PREMIUM_RESULTS),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_REDUCED_FIXED),
      ArticleCode.get(OptimulaArticleConst.ARTICLE_PREMIUM_TARGETS));
    const redPremiumBoss = new ReducedFixedTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_PREMADV_RESULTS),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_REDUCED_FIXED),
      ArticleCode.get(OptimulaArticleConst.ARTICLE_PREMADV_TARGETS));
    const redPremiumPers = new ReducedFixedTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_PREMEXT_RESULTS),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_REDUCED_FIXED),
      ArticleCode.get(OptimulaArticleConst.ARTICLE_PREMEXT_TARGETS));
    // AgrworkHours		AGRWORK_HOURS
    const allowceAgrwork = new AgrworkHoursTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_AGRWORK_TARGETS),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_AGRWORK_HOURS),
      AgrWorkTarifVal, AgrWorkRatioVal, AgrWorkLimitVal, AgrHourLimitVal);
    // AllowceHfull		ALLOWCE_HFULL
    const allowceHOffice = new AllowceHfullTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_ALLOWCE_HOFFICE),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_ALLOWCE_HFULL),
      HomeOffTarifVal, HomeOffHoursVal);
    // AllowceDaily		ALLOWCE_DAILY
    const allowceClotDay = new AllowceDailyTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_ALLOWCE_CLOTDAY),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_ALLOWCE_DAILY),
      ClothesDailyVal);
    // AllowceHours		ALLOWCE_HOURS
    const allowceClotHrs = new AllowceHoursTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_ALLOWCE_CLOTHRS),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_ALLOWCE_HOURS),
      ClothesHoursVal);
    // AllowceDaily		ALLOWCE_DAILY
    const allowceMealDay = new AlldownDailyTarget(montCode, contractEmp, positionEmp, variant1Emp,
      ArticleCode.get(OptimulaArticleConst.ARTICLE_ALLOWCE_MEALDAY),
      ConceptCode.get(OptimulaConceptConst.CONCEPT_ALLDOWN_DAILY),
      MealConDailyVal);

    let targets: ITermTarget[] = [
      contractTimePlan,
      contractTimeWork,
      contractTimeActa,
    ];

    if (MSalaryBasisVal !== 0)
    {
      targets = Array.from(targets).concat(paymentMSalary);
    }
    if (MawardsBasisVal !== 0)
    {
      targets = Array.from(targets).concat(optimusMawards, reducedMawards);
    }
    if (HawardsBasisVal !== 0)
    {
      targets = Array.from(targets).concat(optimusHawards, reducedHawards);
    }
    if (FPremiumBaseVal !== 0)
    {
      targets = Array.from(targets).concat(optPremiumBase, redPremiumBase);
    }
    if (FPremiumBossVal !== 0)
    {
      targets = Array.from(targets).concat(optPremiumBoss, redPremiumBoss);
    }
    if (FPremiumPersVal !== 0)
    {
      targets = Array.from(targets).concat(optPremiumPers, redPremiumPers);
    }
    if (AgrWorkTarifVal !== 0 && AgrWorkRatioVal !== 0)
    {
      targets = Array.from(targets).concat(allowceAgrwork);
    }
    if (HomeOffTarifVal !== 0)
    {
      targets = Array.from(targets).concat(allowceHOffice);
    }
    if (ClothesDailyVal !== 0)
    {
      targets = Array.from(targets).concat(allowceClotDay);
    }
    if (ClothesHoursVal !== 0)
    {
      targets = Array.from(targets).concat(allowceClotHrs);
    }
    if (MealConDailyVal !== 0)
    {
      targets = Array.from(targets).concat(allowceMealDay);
    }

    return targets;
  }
}
