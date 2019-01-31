import { ActionReducer } from '@ngrx/store';

import { IAppState } from '../core.state';

export function debug(reducer: ActionReducer<IAppState>): ActionReducer<IAppState> {
  return (state, action) => {
    const newState = reducer(state, action);
    // console.log(`[DEBUG] action: ${action.type}`, {
    //     payload: (action as any).payload,
    //     oldState: state,
    //     newState
    // });
    return newState;
  };
}
