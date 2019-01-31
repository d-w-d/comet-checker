import { EntityState } from '@ngrx/entity';

export interface IBook {
    id: string;
    title: string;
    author: string;
    description: string;
}

export interface IBookState extends EntityState<IBook> {}
