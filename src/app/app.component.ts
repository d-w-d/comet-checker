import browser from 'browser-detect';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ActionAuthLogin, ActionAuthLogout, routeAnimations, IAppState, LocalStorageService, selectIsAuthenticated } from '@app/core';
// import { environment as env } from '@env/environment';

import {
  //
  ActionSettingsChangeLanguage,
  ActionSettingsChangeAnimationsPageDisabled,
  selectEffectiveTheme,
  selectSettingsLanguage,
  selectSettingsStickyHeader,
  selectSettingsHoverMenu
} from './settings';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cccc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit, AfterViewInit {
  logo = require('../assets/images/logo0.png');

  //Progressive Background Image Loading:
  blurredBackgroundImage = require('../assets/images/blurred_palomar.jpg');
  backgroundImageStyling = {
    // background: `url('https://s3.amazonaws.com/dwds-misc/blurred_palomar.jpg')  no-repeat center top`,
    'background-size': 'cover'
  };

  isAuthenticated$: Observable<boolean>;
  stickyHeader$: Observable<boolean>;
  language$: Observable<string>;
  theme$: Observable<string>;
  hoverMenu$: Observable<boolean>;

  palomarImage: HTMLImageElement;
  // palomarImageSource = 'https://s3.amazonaws.com/dwds-misc/palomar.jpg';

  palomarImageSource = 'https://s3.amazonaws.com/dwds-misc/telescope_v2.png';
  isPalomarImageLoaded = false;
  isAppBackgroundShown = false;

  // xxx: any;
  // _route: string;
  overRideToolbarColor = {};

  constructor(
    //
    private store: Store<IAppState>,
    private storageService: LocalStorageService,
    // private route: ActivatedRoute
    private route: Router
  ) {}

  private static isIEorEdgeOrSafari() {
    // console.log('>>>', browser().name, ['ie', 'edge', 'safari'].includes(browser().name));
    return ['ie', 'edge', 'safari'].includes(browser().name);
  }

  ngOnInit(): void {
    // Determine image to show:
    if (window.innerWidth < 600) this.palomarImageSource = 'https://s3.amazonaws.com/dwds-misc/telescope_v3.png';

    //Subscribe to changes in route:
    this.route.events.subscribe(event => {
      const url = window.location.toString();
      const ar = url.split('/');
      const lastPartOfUrl = ar[ar.length - 1];
      this.overRideToolbarColor = lastPartOfUrl === 'home2' ? { backgroundColor: 'rgba(0,0,0,0.3)' } : {};
      this.isAppBackgroundShown = !['home1', 'home2'].includes(lastPartOfUrl);
    });

    //Lazy Load Unblurred Image:
    this.palomarImage = new Image();
    this.palomarImage.src = this.palomarImageSource;
    this.palomarImage.onload = () => {
      this.isPalomarImageLoaded = true;
    };

    this.storageService.testLocalStorage();

    if (AppComponent.isIEorEdgeOrSafari()) {
      // console.log('Really?!?! 2');
      this.store.dispatch(
        new ActionSettingsChangeAnimationsPageDisabled({
          pageAnimationsDisabled: AppComponent.isIEorEdgeOrSafari()
        })
      );
    }

    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
    this.stickyHeader$ = this.store.pipe(select(selectSettingsStickyHeader));
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));
    this.hoverMenu$ = this.store.pipe(select(selectSettingsHoverMenu));
  }

  ngAfterViewInit() {
    // console.log('>>>>>>>>>>>>>>>>>>>>', this.hoverMenu$);
    // this.hoverMenu$.subscribe(el => console.log('0 >>> ', el));
    // this.stickyHeader$.subscribe(el => console.log('1 >>> ', el));
  }

  onLoginClick() {
    this.store.dispatch(new ActionAuthLogin());
  }

  onLogoutClick() {
    this.store.dispatch(new ActionAuthLogout());
  }

  onLanguageSelect({ value: language }) {
    this.store.dispatch(new ActionSettingsChangeLanguage({ language }));
  }
}
