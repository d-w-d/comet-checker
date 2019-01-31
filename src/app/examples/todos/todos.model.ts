export interface ITodo {
    id: string;
    name: string;
    done: boolean;
}

export type TodosFilter = 'ALL' | 'DONE' | 'ACTIVE';

export interface ITodosState {
    items: ITodo[];
    filter: TodosFilter;
}
