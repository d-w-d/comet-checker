import { IStockMarketState } from './stock-market.model';
import {
    StockMarketActions,
    StockMarketActionTypes
} from './stock-market.actions';

export const initialState: IStockMarketState = {
    symbol: 'GOOGL',
    loading: false
};

export function stockMarketReducer(
    state: IStockMarketState = initialState,
    action: StockMarketActions
): IStockMarketState {
    switch (action.type) {
        case StockMarketActionTypes.RETRIEVE:
            return {
                ...state,
                loading: true,
                stock: null,
                error: null,
                symbol: action.payload.symbol
            };

        case StockMarketActionTypes.RETRIEVE_SUCCESS:
            return {
                ...state,
                loading: false,
                stock: action.payload.stock,
                error: null
            };

        case StockMarketActionTypes.RETRIEVE_ERROR:
            return {
                ...state,
                loading: false,
                stock: null,
                error: action.payload.error
            };

        default:
            return state;
    }
}
