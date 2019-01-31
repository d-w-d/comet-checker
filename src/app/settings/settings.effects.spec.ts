import { Router } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';
import { TranslateService } from '@ngx-translate/core';
import { Actions, getEffectsMetadata } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import { of } from 'rxjs';

import { AnimationsService, IAppState, LocalStorageService, TitleService } from '@app/core';

import { SettingsEffects, SETTINGS_KEY } from './settings.effects';
import { ISettingsState } from './settings.model';
import { ActionSettingsChangeTheme, SettingsActions } from './settings.actions';

describe('SettingsEffects', () => {
  let router: any;
  let localStorageService: jasmine.SpyObj<LocalStorageService>;
  let overlayContainer: jasmine.SpyObj<OverlayContainer>;
  let titleService: jasmine.SpyObj<TitleService>;
  let animationsService: jasmine.SpyObj<AnimationsService>;
  let translateService: jasmine.SpyObj<TranslateService>;
  let store: jasmine.SpyObj<Store<IAppState>>;

  beforeEach(() => {
    router = {
      routerState: {
        snapshot: {}
      },
      events: {
        pipe() {}
      }
    };
    localStorageService = jasmine.createSpyObj('LocalStorageService', ['setItem']);
    overlayContainer = jasmine.createSpyObj('OverlayContainer', ['getContainerElement']);
    titleService = jasmine.createSpyObj('TitleService', ['setTitle']);
    animationsService = jasmine.createSpyObj('AnimationsService', ['updateRouteAnimationType']);
    translateService = jasmine.createSpyObj('TranslateService', ['use']);
    store = jasmine.createSpyObj('store', ['pipe']);
  });

  describe('persistSettings', () => {
    it('should not dispatch any action', () => {
      const actions = new Actions<SettingsActions>();
      // prettier-ignore
      const effect = new SettingsEffects(
        actions,
        store,
        router,
        overlayContainer,
        localStorageService,
        titleService,
        animationsService,
        translateService
    );
      const metadata = getEffectsMetadata(effect);

      expect(metadata.persistSettings).toEqual({ dispatch: false });
    });
  });

  it('should call methods on LocalStorageService for PERSIST action', () => {
    const settings: ISettingsState = {
      language: 'en',
      pageAnimations: true,
      elementsAnimations: true,
      theme: 'default',
      nightTheme: 'default',
      autoNightMode: false,
      stickyHeader: false,
      pageAnimationsDisabled: true,
      hour: 12,
      isMenuHoveringEnabled: false
    };
    store.pipe.and.returnValue(of(settings));
    const persistAction = new ActionSettingsChangeTheme({
      theme: 'DEFAULT'
    });
    const source = cold('a', { a: persistAction });
    const actions = new Actions(source);
    // prettier-ignore
    const effect = new SettingsEffects(
        actions,
        store,
        router,
        overlayContainer,
        localStorageService,
        titleService,
        animationsService,
        translateService
      );

    effect.persistSettings.subscribe(() => {
      expect(localStorageService.setItem).toHaveBeenCalledWith(SETTINGS_KEY, settings);
    });
  });
});
