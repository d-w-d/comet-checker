import browser from 'browser-detect';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ActionAuthLogin, ActionAuthLogout, routeAnimations, IAppState, LocalStorageService, selectIsAuthenticated } from '@app/core';
import { environment as env } from '@env/environment';

import {
  //
  ActionSettingsChangeLanguage,
  ActionSettingsChangeAnimationsPageDisabled,
  selectEffectiveTheme,
  selectSettingsLanguage,
  selectSettingsStickyHeader,
  selectSettingsHoverMenu
} from './settings';

@Component({
  selector: 'brznk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit, AfterViewInit {
  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  year = new Date().getFullYear();
  logo = require('../assets/images/logo.png');
  languages = ['en', 'de', 'sk', 'fr', 'es', 'pt-br', 'zh-cn'];
  navigation = [
    //
    { link: 'about', label: 'brznk.menu.about' },
    { link: 'features', label: 'brznk.menu.features' },
    { link: 'examples', label: 'brznk.menu.examples' }
  ];
  navigationSideMenu = [...this.navigation, { link: 'settings', label: 'brznk.menu.settings' }];

  //Progressive Background Image Loading:
  blurredBackgroundImage = require('../assets/images/blurred_palomar.jpg');
  backgroundImageStyling = {
    background: `url('../assets/images/blurred_palomar.jpg')  no-repeat center top`,
    'background-size': 'cover'
  };

  isAuthenticated$: Observable<boolean>;
  stickyHeader$: Observable<boolean>;
  language$: Observable<string>;
  theme$: Observable<string>;
  hoverMenu$: Observable<boolean>;

  constructor(private store: Store<IAppState>, private storageService: LocalStorageService) {}

  private static isIEorEdgeOrSafari() {
    // console.log('>>>', browser().name, ['ie', 'edge', 'safari'].includes(browser().name));
    return ['ie', 'edge', 'safari'].includes(browser().name);
  }

  ngOnInit(): void {
    // this.store.subscribe(data => console.log('data: ', data));
    this.storageService.testLocalStorage();

    // if (AppComponent.isIEorEdgeOrSafari()) {
    // console.log('Really?!?! 2');
    this.store.dispatch(
      new ActionSettingsChangeAnimationsPageDisabled({
        pageAnimationsDisabled: AppComponent.isIEorEdgeOrSafari()
      })
    );
    // }

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
