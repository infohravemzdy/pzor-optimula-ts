import { IPeriod, Period } from 'hravemzdy.legalios';
import { HistoryResultError } from 'hravemzdy.legalios';
import { ServiceLegalios } from 'hravemzdy.legalios';
import { IPropsHealth } from 'hravemzdy.legalios';
import { IBundleProps } from 'hravemzdy.legalios';
import { assert } from 'chai';
import {Result} from "@badrap/result";

describe('Basic Test', () => {
    const period: IPeriod = Period.getWithYearMonth(2022, 1);
    const sut = new ServiceLegalios();
    const result: Result<IBundleProps, HistoryResultError> = sut.GetBundle(period);

    let bundle: IBundleProps = null;
    let error: HistoryResultError = null;
    let props: IPropsHealth = null;

    if (result.isOk) {
        bundle = result.value;
        props = bundle.HealthProps();
    }
    if (result.isErr) {
        error = result.error;
    }
    it('Result should be OK', () => {
        assert.equal(result.isOk, true);
    });
});
