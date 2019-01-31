import { IFormState, IForm } from './form.model';
import { FormActions, FormActionTypes } from './form.actions';

export const initialState: IFormState = {
    form: {} as IForm
};

export function formReducer(
    state: IFormState = initialState,
    action: FormActions
): IFormState {
    switch (action.type) {
        case FormActionTypes.UPDATE:
            return {
                ...state,
                form: action.payload.form
            };
        case FormActionTypes.RESET:
            return initialState;

        default:
            return state;
    }
}
