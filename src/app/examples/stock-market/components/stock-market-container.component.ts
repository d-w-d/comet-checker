import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

import { selectStockMarket } from '../stock-market.selectors';
import { ActionStockMarketRetrieve } from '../stock-market.actions';
import { IStockMarketState } from '../stock-market.model';
import { IState } from '../../examples.state';

@Component({
  selector: 'cccc-stock-market',
  templateUrl: './stock-market-container.component.html',
  styleUrls: ['./stock-market-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockMarketContainerComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  stocks$: Observable<IStockMarketState>;

  constructor(public store: Store<IState>) {}

  ngOnInit() {
    this.stocks$ = this.store.pipe(select(selectStockMarket));
    this.stocks$.pipe(take(1)).subscribe(stocks => this.onSymbolChange(stocks.symbol));
  }

  onSymbolChange(symbol: string) {
    this.store.dispatch(new ActionStockMarketRetrieve({ symbol }));
  }
}
