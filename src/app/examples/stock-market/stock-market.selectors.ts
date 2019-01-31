import { createSelector } from '@ngrx/store';

import { IExamplesState, selectExamples } from '../examples.state';

export const selectStockMarket = createSelector(
    selectExamples,
    (state: IExamplesState) => state.stocks
);
