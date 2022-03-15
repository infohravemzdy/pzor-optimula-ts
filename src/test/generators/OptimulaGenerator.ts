import bigDecimal = require('js-big-decimal');
import { IBundleProps, IPeriod } from "hravemzdy.legalios";
import { ITermTarget } from "hravemzdy.procezor";

export type GeneratorValueFunc = (gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps) => number;
export type ParseValueFunc = (text: string) => number;
export type NumberToGeneratorFunc = (text: number) => OptimulaGenerator;

export abstract class OptimulaGenerator {
  protected static BIG_100 = new bigDecimal(100);
  protected static BIG_ZERO = new bigDecimal(0);
  protected static BIG_050 = new bigDecimal(0.50);
  protected static BIG_SIXTY = new bigDecimal(60);

  public static zipParse(a: string[], b: ParseValueFunc[]): [string, ParseValueFunc][] {
    return Array.from(Array(Math.max(b.length, a.length)), (_, i) => [a[i], b[i]]);
  }
  public static zipGenerator(a: number[], b: NumberToGeneratorFunc[]): [number, NumberToGeneratorFunc][] {
    return Array.from(Array(Math.max(b.length, a.length)), (_, i) => [a[i], b[i]]);
  }
  public static trimBegChar(x: string, c: string) {
    while(x.charAt(0)===c) {
      x = x.substring(1);
    }
    return x;
  }
  public static trimEndChar(x: string, c: string) {
    while(x.charAt(x.length-1)===c) {
      x = x.substring(0,x.length-1);
    }
    return x;
  }
  public static ParseNANothing(valString: string): number {
    return 0;
  }
  public static ParseIntNumber(valString: string): number {
    if (valString.trim() === "") {
      return 0;
    }
    const numberToParse = OptimulaGenerator.trimEndChar(valString.replace('.', ','), "%").replace("Kč", "").trimEnd();
    let numberValue: bigDecimal = this.BIG_ZERO;
    try
    {
      numberValue = new bigDecimal(numberToParse);
    }
    catch (e)
    {
      return 0;
    }
    return OptimulaGenerator.RoundDoubleToInt(numberValue);
  }
  public static ParseDecNumber(valString: string): number {
    if (valString.trim()==="") {
      return 0;
    }
    const numberToParse = OptimulaGenerator.trimEndChar(valString.replace('.', ','), "%").replace("Kč", "").trimEnd();
    let numberValue: bigDecimal = this.BIG_ZERO;
    try
    {
      numberValue = new bigDecimal(numberToParse);
    }
    catch (e)
    {
      return 0;
    }
    return OptimulaGenerator.RoundDoubleToInt(numberValue.multiply(this.BIG_100));
  }
  public static ParseHrsNumber(valString: string): number {
    if (valString.trim()==="") {
      return 0;
    }
    const numberToParse = OptimulaGenerator.trimEndChar(valString.replace('.', ','), "%").replace("Kč", "").trimEnd();
      let numberValue: bigDecimal = this.BIG_ZERO;
      try
      {
        numberValue = new bigDecimal(numberToParse);
      }
      catch (e)
      {
        return 0;
      }
      return OptimulaGenerator.RoundDoubleToInt(numberValue.multiply(this.BIG_SIXTY));
  }

  constructor(genId: number, genName: string, genNumb: string) {
    this.genId =genId;
    this.genName = genName;
    this.genNumb = genNumb;
    this.DefaultAgrWorkTarifValue = 0;
    this.DefaultAgrWorkRatioValue = 0;
    this.DefaultAgrHourLimitValue = 0;
    this.DefaultAgrWorkLimitValue = 0;
    this.DefaultAgtWorkTarifValue = 0;
    this.DefaultAgtWorkRatioValue = 0;
    this.DefaultAgtHourLimitValue = 0;
    this.DefaultAgtWorkLimitValue = 0;
    this.DefaultClothesHoursValue = 0;
    this.DefaultClothesDailyValue = 0;
    this.DefaultMealConDailyValue = 0;
    this.DefaultHomeOffMonthValue = 0;
    this.DefaultHomeOffTarifValue = 0;
    this.DefaultHomeOffHoursValue = 0;
    this.DefaultMSalaryAwardValue = 0;
    this.DefaultHSalaryAwardValue = 0;
    this.DefaultFPremiumBaseValue = 0;
    this.DefaultFPremiumBossValue = 0;
    this.DefaultFPremiumPersValue = 0;
    this.DefaultFullSheetHrsValue = 0;
    this.DefaultTimeSheetHrsValue = 0;
    this.DefaultHoliSheetHrsValue = 0;
    this.DefaultWorkSheetHrsValue = 0;
    this.DefaultWorkSheetDayValue = 0;
    this.DefaultOverSheetHrsValue = 0;
    this.DefaultVacaRecomHrsValue = 0;
    this.DefaultPaidRecomHrsValue = 0;
    this.DefaultHoliRecomHrsValue = 0;
    this.DefaultOverAllowHrsValue = 0;
    this.DefaultOverAllowRioValue = 0;
    this.DefaultRestAllowHrsValue = 0;
    this.DefaultRestAllowRioValue = 0;
    this.DefaultWendAllowHrsValue = 0;
    this.DefaultWendAllowRioValue = 0;
    this.DefaultNighAllowHrsValue = 0;
    this.DefaultNighAllowRioValue = 0;
    this.DefaultHoliAllowHrsValue = 0;
    this.DefaultHoliAllowRioValue = 0;
    this.DefaultQClothesBaseValue = 0;
    this.DefaultQHOfficeBaseValue = 0;
    this.DefaultQAgrWorkBaseValue = 0;
    this.DefaultQSumWorkHourValue = 0;

    this.AgrWorkTarifFunc = this.DefaultAgrWorkTarif;
    this.AgrWorkRatioFunc = this.DefaultAgrWorkRatio;
    this.AgrHourLimitFunc = this.DefaultAgrHourLimit;
    this.AgrWorkLimitFunc = this.DefaultAgrWorkLimit;
    this.AgtWorkTarifFunc = this.DefaultAgtWorkTarif;
    this.AgtWorkRatioFunc = this.DefaultAgtWorkRatio;
    this.AgtHourLimitFunc = this.DefaultAgtHourLimit;
    this.AgtWorkLimitFunc = this.DefaultAgtWorkLimit;
    this.ClothesHoursFunc = this.DefaultClothesHours;
    this.ClothesDailyFunc = this.DefaultClothesDaily;
    this.MealConDailyFunc = this.DefaultMealConDaily;
    this.HomeOffMonthFunc = this.DefaultHomeOffMonth;
    this.HomeOffTarifFunc = this.DefaultHomeOffTarif;
    this.HomeOffHoursFunc = this.DefaultHomeOffHours;
    this.MSalaryAwardFunc = this.DefaultMSalaryAward;
    this.HSalaryAwardFunc = this.DefaultHSalaryAward;
    this.FPremiumBaseFunc = this.DefaultFPremiumBase;
    this.FPremiumBossFunc = this.DefaultFPremiumBoss;
    this.FPremiumPersFunc = this.DefaultFPremiumPers;
    this.FullSheetHrsFunc = this.DefaultFullSheetHrs;
    this.TimeSheetHrsFunc = this.DefaultTimeSheetHrs;
    this.HoliSheetHrsFunc = this.DefaultHoliSheetHrs;
    this.WorkSheetHrsFunc = this.DefaultWorkSheetHrs;
    this.WorkSheetDayFunc = this.DefaultWorkSheetDay;
    this.OverSheetHrsFunc = this.DefaultOverSheetHrs;
    this.VacaRecomHrsFunc = this.DefaultVacaRecomHrs;
    this.PaidRecomHrsFunc = this.DefaultPaidRecomHrs;
    this.HoliRecomHrsFunc = this.DefaultHoliRecomHrs;
    this.OverAllowHrsFunc = this.DefaultOverAllowHrs;
    this.OverAllowRioFunc = this.DefaultOverAllowRio;
    this.RestAllowHrsFunc = this.DefaultRestAllowHrs;
    this.RestAllowRioFunc = this.DefaultRestAllowRio;
    this.WendAllowHrsFunc = this.DefaultWendAllowHrs;
    this.WendAllowRioFunc = this.DefaultWendAllowRio;
    this.NighAllowHrsFunc = this.DefaultNighAllowHrs;
    this.NighAllowRioFunc = this.DefaultNighAllowRio;
    this.HoliAllowHrsFunc = this.DefaultHoliAllowHrs;
    this.HoliAllowRioFunc = this.DefaultHoliAllowRio;
    this.QClothesBaseFunc = this.DefaultQClothesBase;
    this.QHOfficeBaseFunc = this.DefaultQHOfficeBase;
    this.QAgrWorkBaseFunc = this.DefaultQAgrWorkBase;
    this.QSumWorkHourFunc = this.DefaultQSumWorkHour;
  }
  genId: number;
  genName: string;
  genNumb: string;
  DefaultAgrWorkTarifValue: number;
  DefaultAgrWorkRatioValue: number;
  DefaultAgrHourLimitValue: number;
  DefaultAgrWorkLimitValue: number;
  DefaultAgtWorkTarifValue: number;
  DefaultAgtWorkRatioValue: number;
  DefaultAgtHourLimitValue: number;
  DefaultAgtWorkLimitValue: number;
  DefaultClothesHoursValue: number;
  DefaultClothesDailyValue: number;
  DefaultMealConDailyValue: number;
  DefaultHomeOffMonthValue: number;
  DefaultHomeOffTarifValue: number;
  DefaultHomeOffHoursValue: number;
  DefaultMSalaryAwardValue: number;
  DefaultHSalaryAwardValue: number;
  DefaultFPremiumBaseValue: number;
  DefaultFPremiumBossValue: number;
  DefaultFPremiumPersValue: number;
  DefaultFullSheetHrsValue: number;
  DefaultTimeSheetHrsValue: number;
  DefaultHoliSheetHrsValue: number;
  DefaultWorkSheetHrsValue: number;
  DefaultWorkSheetDayValue: number;
  DefaultOverSheetHrsValue: number;
  DefaultVacaRecomHrsValue: number;
  DefaultPaidRecomHrsValue: number;
  DefaultHoliRecomHrsValue: number;
  DefaultOverAllowHrsValue: number;
  DefaultOverAllowRioValue: number;
  DefaultRestAllowHrsValue: number;
  DefaultRestAllowRioValue: number;
  DefaultWendAllowHrsValue: number;
  DefaultWendAllowRioValue: number;
  DefaultNighAllowHrsValue: number;
  DefaultNighAllowRioValue: number;
  DefaultHoliAllowHrsValue: number;
  DefaultHoliAllowRioValue: number;
  DefaultQClothesBaseValue: number;
  DefaultQHOfficeBaseValue: number;
  DefaultQAgrWorkBaseValue: number;
  DefaultQSumWorkHourValue: number;

  AgrWorkTarifFunc: GeneratorValueFunc;
  AgrWorkRatioFunc: GeneratorValueFunc;
  AgrHourLimitFunc: GeneratorValueFunc;
  AgrWorkLimitFunc: GeneratorValueFunc;
  AgtWorkTarifFunc: GeneratorValueFunc;
  AgtWorkRatioFunc: GeneratorValueFunc;
  AgtHourLimitFunc: GeneratorValueFunc;
  AgtWorkLimitFunc: GeneratorValueFunc;
  ClothesHoursFunc: GeneratorValueFunc;
  ClothesDailyFunc: GeneratorValueFunc;
  MealConDailyFunc: GeneratorValueFunc;
  HomeOffMonthFunc: GeneratorValueFunc;
  HomeOffTarifFunc: GeneratorValueFunc;
  HomeOffHoursFunc: GeneratorValueFunc;
  MSalaryAwardFunc: GeneratorValueFunc;
  HSalaryAwardFunc: GeneratorValueFunc;
  FPremiumBaseFunc: GeneratorValueFunc;
  FPremiumBossFunc: GeneratorValueFunc;
  FPremiumPersFunc: GeneratorValueFunc;
  FullSheetHrsFunc: GeneratorValueFunc;
  TimeSheetHrsFunc: GeneratorValueFunc;
  HoliSheetHrsFunc: GeneratorValueFunc;
  WorkSheetHrsFunc: GeneratorValueFunc;
  WorkSheetDayFunc: GeneratorValueFunc;
  OverSheetHrsFunc: GeneratorValueFunc;
  VacaRecomHrsFunc: GeneratorValueFunc;
  PaidRecomHrsFunc: GeneratorValueFunc;
  HoliRecomHrsFunc: GeneratorValueFunc;
  OverAllowHrsFunc: GeneratorValueFunc;
  OverAllowRioFunc: GeneratorValueFunc;
  RestAllowHrsFunc: GeneratorValueFunc;
  RestAllowRioFunc: GeneratorValueFunc;
  WendAllowHrsFunc: GeneratorValueFunc;
  WendAllowRioFunc: GeneratorValueFunc;
  NighAllowHrsFunc: GeneratorValueFunc;
  NighAllowRioFunc: GeneratorValueFunc;
  HoliAllowHrsFunc: GeneratorValueFunc;
  HoliAllowRioFunc: GeneratorValueFunc;
  QClothesBaseFunc: GeneratorValueFunc;
  QHOfficeBaseFunc: GeneratorValueFunc;
  QAgrWorkBaseFunc: GeneratorValueFunc;
  QSumWorkHourFunc: GeneratorValueFunc;

  WithGenerNothingVal(val: number): OptimulaGenerator {this.DefaultAgrWorkTarifValue = val; return this;}
  WithAgrWorkTarifVal(val: number): OptimulaGenerator {this.DefaultAgrWorkTarifValue = val; return this;}
  WithAgrWorkRatioVal(val: number): OptimulaGenerator {this.DefaultAgrWorkRatioValue = val; return this;}
  WithAgrHourLimitVal(val: number): OptimulaGenerator {this.DefaultAgrHourLimitValue = val; return this;}
  WithAgrWorkLimitVal(val: number): OptimulaGenerator {this.DefaultAgrWorkLimitValue = val; return this;}
  WithAgtWorkTarifVal(val: number): OptimulaGenerator {this.DefaultAgtWorkTarifValue = val; return this;}
  WithAgtWorkRatioVal(val: number): OptimulaGenerator {this.DefaultAgtWorkRatioValue = val; return this;}
  WithAgtHourLimitVal(val: number): OptimulaGenerator {this.DefaultAgtHourLimitValue = val; return this;}
  WithAgtWorkLimitVal(val: number): OptimulaGenerator {this.DefaultAgtWorkLimitValue = val; return this;}
  WithClothesHoursVal(val: number): OptimulaGenerator {this.DefaultClothesHoursValue = val; return this;}
  WithClothesDailyVal(val: number): OptimulaGenerator {this.DefaultClothesDailyValue = val; return this;}
  WithMealConDailyVal(val: number): OptimulaGenerator {this.DefaultMealConDailyValue = val; return this;}
  WithHomeOffMonthVal(val: number): OptimulaGenerator {this.DefaultHomeOffMonthValue = val; return this;}
  WithHomeOffTarifVal(val: number): OptimulaGenerator {this.DefaultHomeOffTarifValue = val; return this;}
  WithHomeOffHoursVal(val: number): OptimulaGenerator {this.DefaultHomeOffHoursValue = val; return this;}
  WithMSalaryAwardVal(val: number): OptimulaGenerator {this.DefaultMSalaryAwardValue = val; return this;}
  WithHSalaryAwardVal(val: number): OptimulaGenerator {this.DefaultHSalaryAwardValue = val; return this;}
  WithFPremiumBaseVal(val: number): OptimulaGenerator {this.DefaultFPremiumBaseValue = val; return this;}
  WithFPremiumBossVal(val: number): OptimulaGenerator {this.DefaultFPremiumBossValue = val; return this;}
  WithFPremiumPersVal(val: number): OptimulaGenerator {this.DefaultFPremiumPersValue = val; return this;}
  WithFullSheetHrsVal(val: number): OptimulaGenerator {this.DefaultFullSheetHrsValue = val; return this;}
  WithTimeSheetHrsVal(val: number): OptimulaGenerator {this.DefaultTimeSheetHrsValue = val; return this;}
  WithHoliSheetHrsVal(val: number): OptimulaGenerator {this.DefaultHoliSheetHrsValue = val; return this;}
  WithWorkSheetHrsVal(val: number): OptimulaGenerator {this.DefaultWorkSheetHrsValue = val; return this;}
  WithWorkSheetDayVal(val: number): OptimulaGenerator {this.DefaultWorkSheetDayValue = val; return this;}
  WithOverSheetHrsVal(val: number): OptimulaGenerator {this.DefaultOverSheetHrsValue = val; return this;}
  WithVacaRecomHrsVal(val: number): OptimulaGenerator {this.DefaultVacaRecomHrsValue = val; return this;}
  WithPaidRecomHrsVal(val: number): OptimulaGenerator {this.DefaultPaidRecomHrsValue = val; return this;}
  WithHoliRecomHrsVal(val: number): OptimulaGenerator {this.DefaultHoliRecomHrsValue = val; return this;}
  WithOverAllowHrsVal(val: number): OptimulaGenerator {this.DefaultOverAllowHrsValue = val; return this;}
  WithOverAllowRioVal(val: number): OptimulaGenerator {this.DefaultOverAllowRioValue = val; return this;}
  WithRestAllowHrsVal(val: number): OptimulaGenerator {this.DefaultRestAllowHrsValue = val; return this;}
  WithRestAllowRioVal(val: number): OptimulaGenerator {this.DefaultRestAllowRioValue = val; return this;}
  WithWendAllowHrsVal(val: number): OptimulaGenerator {this.DefaultWendAllowHrsValue = val; return this;}
  WithWendAllowRioVal(val: number): OptimulaGenerator {this.DefaultWendAllowRioValue = val; return this;}
  WithNighAllowHrsVal(val: number): OptimulaGenerator {this.DefaultNighAllowHrsValue = val; return this;}
  WithNighAllowRioVal(val: number): OptimulaGenerator {this.DefaultNighAllowRioValue = val; return this;}
  WithHoliAllowHrsVal(val: number): OptimulaGenerator {this.DefaultHoliAllowHrsValue = val; return this;}
  WithHoliAllowRioVal(val: number): OptimulaGenerator {this.DefaultHoliAllowRioValue = val; return this;}
  WithQClothesBaseVal(val: number): OptimulaGenerator {this.DefaultQClothesBaseValue = val; return this;}
  WithQHOfficeBaseVal(val: number): OptimulaGenerator {this.DefaultQHOfficeBaseValue = val; return this;}
  WithQAgrWorkBaseVal(val: number): OptimulaGenerator {this.DefaultQAgrWorkBaseValue = val; return this;}
  WithQSumWorkHourVal(val: number): OptimulaGenerator {this.DefaultQSumWorkHourValue = val; return this;}

  DefaultAgrWorkTarif(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultAgrWorkTarifValue;}
  DefaultAgrWorkRatio(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultAgrWorkRatioValue;}
  DefaultAgrHourLimit(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultAgrHourLimitValue;}
  DefaultAgrWorkLimit(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultAgrWorkLimitValue;}
  DefaultAgtWorkTarif(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultAgtWorkTarifValue;}
  DefaultAgtWorkRatio(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultAgtWorkRatioValue;}
  DefaultAgtHourLimit(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultAgtHourLimitValue;}
  DefaultAgtWorkLimit(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultAgtWorkLimitValue;}
  DefaultClothesHours(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultClothesHoursValue;}
  DefaultClothesDaily(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultClothesDailyValue;}
  DefaultMealConDaily(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultMealConDailyValue;}
  DefaultHomeOffMonth(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultHomeOffMonthValue;}
  DefaultHomeOffTarif(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultHomeOffTarifValue;}
  DefaultHomeOffHours(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultHomeOffHoursValue;}
  DefaultMSalaryAward(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultMSalaryAwardValue;}
  DefaultHSalaryAward(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultHSalaryAwardValue;}
  DefaultFPremiumBase(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultFPremiumBaseValue;}
  DefaultFPremiumBoss(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultFPremiumBossValue;}
  DefaultFPremiumPers(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultFPremiumPersValue;}
  DefaultFullSheetHrs(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultFullSheetHrsValue;}
  DefaultTimeSheetHrs(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultTimeSheetHrsValue;}
  DefaultHoliSheetHrs(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultHoliSheetHrsValue;}
  DefaultWorkSheetHrs(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultWorkSheetHrsValue;}
  DefaultWorkSheetDay(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultWorkSheetDayValue;}
  DefaultOverSheetHrs(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultOverSheetHrsValue;}
  DefaultVacaRecomHrs(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultVacaRecomHrsValue;}
  DefaultPaidRecomHrs(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultPaidRecomHrsValue;}
  DefaultHoliRecomHrs(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultHoliRecomHrsValue;}
  DefaultOverAllowHrs(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultOverAllowHrsValue;}
  DefaultOverAllowRio(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultOverAllowRioValue;}
  DefaultRestAllowHrs(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultRestAllowHrsValue;}
  DefaultRestAllowRio(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultRestAllowRioValue;}
  DefaultWendAllowHrs(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultWendAllowHrsValue;}
  DefaultWendAllowRio(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultWendAllowRioValue;}
  DefaultNighAllowHrs(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultNighAllowHrsValue;}
  DefaultNighAllowRio(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultNighAllowRioValue;}
  DefaultHoliAllowHrs(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultHoliAllowHrsValue;}
  DefaultHoliAllowRio(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultHoliAllowRioValue;}
  DefaultQClothesBase(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultQClothesBaseValue;}
  DefaultQHOfficeBase(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultQHOfficeBaseValue;}
  DefaultQAgrWorkBase(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultQAgrWorkBaseValue;}
  DefaultQSumWorkHour(gen: OptimulaGenerator, period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): number {return this.DefaultQSumWorkHourValue;}

  abstract BuildImportXlsString(period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): string[];
  abstract BuildImportCsvString(period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): string[];
  abstract BuildSpecTargets(period: IPeriod, ruleset: IBundleProps, prevset: IBundleProps): Iterable<ITermTarget>;

  public static ResultDivDouble(dblUpper: bigDecimal, dblDown: bigDecimal, multiplex: bigDecimal = new bigDecimal(1.0)): bigDecimal {
    if (dblDown.compareTo(OptimulaGenerator.BIG_ZERO))
    {
      return OptimulaGenerator.BIG_ZERO;
    }

    const dblReturn = dblUpper.divide(dblDown, 8).multiply(multiplex);

    return (dblReturn);
  }
  public static RoundDoubleToInt(dblValue: bigDecimal): number {
    const dblAdjusted5 = ((dblValue >= OptimulaGenerator.BIG_ZERO) ? dblValue.add(OptimulaGenerator.BIG_050) : dblValue.subtract(OptimulaGenerator.BIG_050));
    const dblRoundRown = dblAdjusted5.round(0, bigDecimal.RoundingModes.FLOOR);
    return Number(dblRoundRown.getValue());
  }
  public static CcyFormatDouble(dblValue: bigDecimal): string {
    const resultText = `${dblValue.getPrettyValue(2, '.')}`;
    return resultText;
  }
  public static NumFormatDouble(dblValue: bigDecimal): string {
    const resultText = `${dblValue.getPrettyValue(0, '.')}`;
    // No fear of rounding and takes the default number format
    // decimal decValue = dblValue;
    // decValue.ToString("0.00");
    // dblValue.ToString("F");
    return resultText;
  }
  public static NumFormatInteger(value: number): string {
    const resultText = `${value.toFixed(0)}`;
    // No fear of rounding and takes the default number format
    // decimal decValue = dblValue;
    // decValue.ToString("0.00");
    // dblValue.ToString("F");
    return resultText;
  }
  public static HrsFormatHHMM(dblValue: bigDecimal): string {
    const nIntSumMinut = OptimulaGenerator.RoundDoubleToInt(dblValue.multiply(OptimulaGenerator.BIG_SIXTY));
    const nIntHours = nIntSumMinut / 60;
    const nIntMinut = nIntSumMinut % 60;

    return `${nIntHours.toFixed(0)}:${String(nIntMinut.toFixed(0)).padStart(2, '0')}`;
  }
  public static HrsFormatDouble(dblValue: bigDecimal): string {
    return `${dblValue.getPrettyValue(2, '.')}`;
  }
  public static HrdFormatDouble(dblValue: bigDecimal): string {
    return `${dblValue.getPrettyValue(0, '.')}`;
  }
  public static DayFormatDouble(dblValue: bigDecimal): string {
    return `${dblValue.getPrettyValue(2, '.')}`;
  }
  public static DecFormatDouble(dblValue: bigDecimal): string {
    return `${dblValue.getPrettyValue(4, '.')}`;
  }
  public static CcyFormatIntX100(value: number): string {
    const dblValue = OptimulaGenerator.ResultDivDouble(new bigDecimal(value), new bigDecimal(100));
    return OptimulaGenerator.CcyFormatDouble(dblValue);
  }
  public static NumFormatIntX(value: number, bIntNumbers: boolean): string {
    if (bIntNumbers) {
      return OptimulaGenerator.NumFormatInteger(value / 100);
    }
    else
    {
      const dblValue = OptimulaGenerator.ResultDivDouble(new bigDecimal(value), new bigDecimal(100));
      return OptimulaGenerator.NumFormatDouble(dblValue);
    }
  }
  public static RatFormatIntX100(value: number): string {
    const dblValue = this.ResultDivDouble(new bigDecimal(value), new bigDecimal(10000));
    return this.NumFormatDouble(dblValue);
  }
  public static NumFormatIntX100(value: number): string {
    const dblValue = OptimulaGenerator.ResultDivDouble(new bigDecimal(value), new bigDecimal(100));
    return OptimulaGenerator.NumFormatDouble(dblValue);
  }
  public static HrsFormatIntX060(value: number): string {
    const dblValue = OptimulaGenerator.ResultDivDouble(new bigDecimal(value), new bigDecimal(60));
    return OptimulaGenerator.HrsFormatDouble(dblValue);
  }
  public static HrdFormatIntX060(value: number): string {
    const dblValue = OptimulaGenerator.ResultDivDouble(new bigDecimal(value), new bigDecimal(60));
    return OptimulaGenerator.HrdFormatDouble(dblValue);
  }
  public static DayFormatIntX100(value: number): string {
    const dblValue = OptimulaGenerator.ResultDivDouble(new bigDecimal(value), new bigDecimal(100));
    return OptimulaGenerator.DayFormatDouble(dblValue);
  }
}

