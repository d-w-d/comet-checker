import { createSelector } from '@ngrx/store';

import { selectAuthState } from '../core.state';
import { IAuthState } from './auth.models';

export const selectAuth = createSelector(
    selectAuthState,
    (state: IAuthState) => state
);

export const selectIsAuthenticated = createSelector(
    selectAuthState,
    (state: IAuthState) => state.isAuthenticated
);
