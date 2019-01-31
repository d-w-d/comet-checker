import { IAuthState } from './auth.models';
import { AuthActions, AuthActionTypes } from './auth.actions';

export const initialState: IAuthState = {
    isAuthenticated: false
};

export function authReducer(
    state: IAuthState = initialState,
    action: AuthActions
): IAuthState {
    switch (action.type) {
        case AuthActionTypes.LOGIN:
            return { ...state, isAuthenticated: true };

        case AuthActionTypes.LOGOUT:
            return { ...state, isAuthenticated: false };

        default:
            return state;
    }
}
