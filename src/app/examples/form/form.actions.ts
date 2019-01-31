import { Action } from '@ngrx/store';
import { IForm } from './form.model';

export enum FormActionTypes {
    UPDATE = '[Form] Update',
    RESET = '[Form] Reset'
}

export class ActionFormUpdate implements Action {
    readonly type = FormActionTypes.UPDATE;
    constructor(readonly payload: { form: IForm }) {}
}

export class ActionFormReset implements Action {
    readonly type = FormActionTypes.RESET;
}

export type FormActions = ActionFormUpdate | ActionFormReset;
