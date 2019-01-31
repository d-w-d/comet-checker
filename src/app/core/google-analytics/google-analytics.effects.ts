import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Effect } from '@ngrx/effects';
import { tap, filter } from 'rxjs/operators';

@Injectable()
export class GoogleAnalyticsEffects {
    constructor(private router: Router) {}

    @Effect({ dispatch: false })
    pageView = this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        tap((event: NavigationEnd) => {
            (window as any).ga('set', 'page', event.urlAfterRedirects);
            (window as any).ga('send', 'pageview');
        })
    );
}
