import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IZTFData } from './ztf-data.model';

// const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const PROXY_URL = '';

@Injectable({
  providedIn: 'root'
})
export class ZtfDataService {
  constructor(private httpClient: HttpClient) {}

  getOortData(symbol: string): Observable<IZTFData> {
    return this.httpClient.get(PROXY_URL + `https://oort.astro.umd.edu/ztf/getsth`).pipe(
      map((data: any) => ({
        // asteroids: ['asteroid1', 'asteroid2'],
        // greeting: 'hello!!!'
        asteroids: data.asteroids,
        greeting: data.greeting
      }))
    );
  }
}

// @Injectable()
// export class StockMarketService {
//     constructor(private httpClient: HttpClient) {}

//     retrieveStock(symbol: string): Observable<IStock> {
//         return this.httpClient
//             .get(
//                 PROXY_URL +
//                     `https://api.iextrading.com/1.0/stock/${symbol}/quote`
//             )
//             .pipe(
//                 map((stock: any) => ({
//                     symbol: stock.symbol,
//                     exchange: stock.primaryExchange,
//                     last: stock.latestPrice,
//                     ccy: 'USD',
//                     change: stock.close,
//                     changePositive: stock.change.toString().indexOf('+') === 0,
//                     changeNegative: stock.change.toString().indexOf('-') === 0,
//                     changePercent: stock.changePercent.toFixed(2)
//                 }))
//             );
//     }
// }
