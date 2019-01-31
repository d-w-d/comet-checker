export interface IForm {
    autosave: boolean;
    username: string;
    password: string;
    email: string;
    description: string;
    requestGift: boolean;
    birthday: Date;
    rating: number;
}

export interface IFormState {
    form: IForm;
}
