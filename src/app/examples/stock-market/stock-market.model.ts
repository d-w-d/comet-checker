import { HttpErrorResponse } from '@angular/common/http';

export interface IStock {
    symbol: string;
    exchange: string;
    last: string;
    ccy: string;
    change: string;
    changePositive: boolean;
    changeNegative: boolean;
    changePercent: string;
}

export interface IStockMarketState {
    symbol: string;
    loading: boolean;
    stock?: IStock;
    error?: HttpErrorResponse;
}
