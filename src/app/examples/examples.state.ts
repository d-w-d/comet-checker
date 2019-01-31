import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { IAppState } from '@app/core';

import { todosReducer } from './todos/todos.reducer';
import { ITodosState } from './todos/todos.model';
import { stockMarketReducer } from './stock-market/stock-market.reducer';
import { IStockMarketState } from './stock-market/stock-market.model';
import { bookReducer } from './crud/books.reducer';
import { formReducer } from './form/form.reducer';
import { IFormState } from './form/form.model';
import { IBook, IBookState } from './crud/books.model';

export const FEATURE_NAME = 'examples';
export const selectExamples = createFeatureSelector<IState, IExamplesState>(
    FEATURE_NAME
);
export const reducers: ActionReducerMap<IExamplesState> = {
    todos: todosReducer,
    stocks: stockMarketReducer,
    books: bookReducer,
    form: formReducer
};

export interface IExamplesState {
    todos: ITodosState;
    stocks: IStockMarketState;
    form: IFormState;
    books: IBookState;
}

export interface IState extends IAppState {
    examples: IExamplesState;
}
