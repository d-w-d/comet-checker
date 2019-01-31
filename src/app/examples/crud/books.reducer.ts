import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { IBook, IBookState } from './books.model';
import { BookActionTypes, BookActions } from './books.actions';

export function sortByTitle(a: IBook, b: IBook): number {
    return a.title.localeCompare(b.title);
}

export const bookAdapter: EntityAdapter<IBook> = createEntityAdapter<IBook>({
    sortComparer: sortByTitle
});

export const initialState: IBookState = bookAdapter.getInitialState({
    ids: ['123'],
    entities: {
        '123': {
            id: '123',
            title: 'Reactive Programming with Angular and ngrx',
            author: 'Oren Farhi',
            description:
                'Learn to Harness the Power of Reactive Programming with RxJS and ngrx Extensions'
        }
    }
});

export function bookReducer(
    state: IBookState = initialState,
    action: BookActions
): IBookState {
    switch (action.type) {
        case BookActionTypes.UPSERT_ONE:
            return bookAdapter.upsertOne(action.payload.book, state);

        case BookActionTypes.DELETE_ONE:
            return bookAdapter.removeOne(action.payload.id, state);

        default:
            return state;
    }
}
