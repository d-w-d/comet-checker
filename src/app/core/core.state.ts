import {
    ActionReducerMap,
    MetaReducer,
    createFeatureSelector
} from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '@env/environment';

import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage.reducer';
import { debug } from './meta-reducers/debug.reducer';
import { IAuthState } from './auth/auth.models';
import { authReducer } from './auth/auth.reducer';
import { IRouterStateUrl } from './router/router.state';

export const reducers: ActionReducerMap<IAppState> = {
    auth: authReducer,
    router: routerReducer
};

export const metaReducers: MetaReducer<IAppState>[] = [
    initStateFromLocalStorage
];
if (!environment.production) {
    metaReducers.unshift(storeFreeze);
    if (!environment.test) {
        metaReducers.unshift(debug);
    }
}

export const selectAuthState = createFeatureSelector<IAppState, IAuthState>(
    'auth'
);

export const selectRouterState = createFeatureSelector<
    IAppState,
    RouterReducerState<IRouterStateUrl>
>('router');

export interface IAppState {
    auth: IAuthState;
    router: RouterReducerState<IRouterStateUrl>;
}
