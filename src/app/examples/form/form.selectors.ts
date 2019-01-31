import { createSelector } from '@ngrx/store';

import { IExamplesState, selectExamples } from '../examples.state';

export const selectFormState = createSelector(
    selectExamples,
    (state: IExamplesState) => state.form
);
