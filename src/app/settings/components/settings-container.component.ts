import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

import {
  //
  ActionSettingsChangeAnimationsElements,
  ActionSettingsChangeAnimationsPage,
  ActionSettingsChangeAutoNightMode,
  ActionSettingsChangeLanguage,
  ActionSettingsChangeTheme,
  ActionSettingsChangeStickyHeader,
  ActionSettingsChangeHoverMenu
} from '../settings.actions';
import { ISettingsState, IState, THEMES } from '../settings.model';
import { selectSettings } from '../settings.selectors';

@Component({
  selector: 'cccc-settings',
  templateUrl: './settings-container.component.html',
  styleUrls: ['./settings-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsContainerComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  settings$: Observable<ISettingsState>;

  themes = [
    //
    // { value: 'DEFAULT-THEME', label: 'blue' },
    // { value: 'LIGHT-THEME', label: 'light' },
    // { value: 'NATURE-THEME', label: 'nature' },
    // { value: 'BLACK-THEME', label: 'dark' },
    // { value: 'CANDY-THEME', label: 'candy' }

    { value: THEMES.DEFAULT_THEME, label: 'blue' },
    { value: THEMES.LIGHT_THEME, label: 'light' },
    { value: THEMES.NATURE_THEME, label: 'nature' },
    { value: THEMES.BLACK_THEME, label: 'dark' },
    { value: THEMES.CANDY_THEME, label: 'candy' }
  ];

  languages = [
    //
    { value: 'en', label: 'en' },
    { value: 'de', label: 'de' },
    { value: 'sk', label: 'sk' },
    { value: 'fr', label: 'fr' },
    { value: 'es', label: 'es' },
    { value: 'pt-br', label: 'pt-br' },
    { value: 'zh-cn', label: 'zh-cn' }
  ];

  constructor(private store: Store<IState>) {}

  ngOnInit() {
    this.settings$ = this.store.pipe(select(selectSettings));
    // this.settings$.subscribe(el => console.log('!!!>>> ', el));
  }

  onLanguageSelect({ value: language }) {
    this.store.dispatch(new ActionSettingsChangeLanguage({ language }));
  }

  onThemeSelect({ value: theme }) {
    this.store.dispatch(new ActionSettingsChangeTheme({ theme }));
  }

  onAutoNightModeToggle({ checked: autoNightMode }) {
    this.store.dispatch(new ActionSettingsChangeAutoNightMode({ autoNightMode }));
  }

  onStickyHeaderToggle({ checked: stickyHeader }) {
    this.store.dispatch(new ActionSettingsChangeStickyHeader({ stickyHeader }));
  }

  onPageAnimationsToggle({ checked: pageAnimations }) {
    this.store.dispatch(new ActionSettingsChangeAnimationsPage({ pageAnimations: !!pageAnimations }));
  }

  onElementsAnimationsToggle({ checked: elementsAnimations }) {
    this.store.dispatch(new ActionSettingsChangeAnimationsElements({ elementsAnimations }));
  }

  onHoverMenuToggle({ checked: isMenuHoveringEnabled }) {
    this.store.dispatch(new ActionSettingsChangeHoverMenu({ isMenuHoveringEnabled }));
  }
}
