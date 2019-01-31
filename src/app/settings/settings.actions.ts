import { Action } from '@ngrx/store';
import { Language, ISettingsAction, THEMES } from './settings.model';

export enum SettingsActionTypes {
  CHANGE_LANGUAGE = '[Settings] Change Language',
  CHANGE_THEME = '[Settings] Change Theme',
  CHANGE_AUTO_NIGHT_AUTO_MODE = '[Settings] Change Auto Night Mode',
  CHANGE_STICKY_HEADER = '[Settings] Change Sticky Header',
  CHANGE_ANIMATIONS_PAGE = '[Settings] Change Animations Page',
  CHANGE_ANIMATIONS_PAGE_DISABLED = '[Settings] Change Animations Page Disabled',
  CHANGE_ANIMATIONS_ELEMENTS = '[Settings] Change Animations Elements',
  CHANGE_HOUR = '[Settings] Change Hours',
  CHANGE_HOVER_MENU = '[Settings] Change Hover Menu'
}

export class ActionSettingsChangeLanguage implements ISettingsAction {
  readonly type = SettingsActionTypes.CHANGE_LANGUAGE;

  constructor(readonly payload: { language: Language }) {}
}

export class ActionSettingsChangeTheme implements ISettingsAction {
  readonly type = SettingsActionTypes.CHANGE_THEME;

  constructor(readonly payload: { theme: THEMES }) {}
}

export class ActionSettingsChangeAutoNightMode implements ISettingsAction {
  readonly type = SettingsActionTypes.CHANGE_AUTO_NIGHT_AUTO_MODE;

  constructor(readonly payload: { autoNightMode: boolean }) {}
}

export class ActionSettingsChangeStickyHeader implements ISettingsAction {
  readonly type = SettingsActionTypes.CHANGE_STICKY_HEADER;

  constructor(readonly payload: { stickyHeader: boolean }) {}
}

export class ActionSettingsChangeAnimationsPage implements ISettingsAction {
  readonly type = SettingsActionTypes.CHANGE_ANIMATIONS_PAGE;

  constructor(readonly payload: { pageAnimations: boolean }) {}
}

export class ActionSettingsChangeAnimationsPageDisabled implements ISettingsAction {
  readonly type = SettingsActionTypes.CHANGE_ANIMATIONS_PAGE_DISABLED;

  constructor(readonly payload: { pageAnimationsDisabled: boolean }) {}
}

export class ActionSettingsChangeAnimationsElements implements ISettingsAction {
  readonly type = SettingsActionTypes.CHANGE_ANIMATIONS_ELEMENTS;

  constructor(readonly payload: { elementsAnimations: boolean }) {}
}

export class ActionSettingsChangeHour implements ISettingsAction {
  readonly type = SettingsActionTypes.CHANGE_HOUR;

  constructor(readonly payload: { hour: number }) {}
}

export class ActionSettingsChangeHoverMenu implements ISettingsAction {
  readonly type = SettingsActionTypes.CHANGE_HOVER_MENU;

  constructor(readonly payload: { isMenuHoveringEnabled: boolean }) {}
}

// export type SettingsActions =  ActionSettingsChangeLanguage | ActionSettingsChangeLanguage |
//                                ActionSettingsChangeTheme | ActionSettingsChangeAnimationsPage |
//                                ActionSettingsChangeAnimationsPageDisabled | ActionSettingsChangeAnimationsElements |
//                                ActionSettingsChangeAutoNightMode | ActionSettingsChangeStickyHeader |
//                                ActionSettingsChangeHour | ActionSettingsChangeHoverMenu;

//Crappy Workaround of VSCode Auto-Formatting Headaches
type T1 = ActionSettingsChangeLanguage | ActionSettingsChangeLanguage;
type T2 = ActionSettingsChangeTheme | ActionSettingsChangeAnimationsPage;
type T3 = ActionSettingsChangeAnimationsPageDisabled | ActionSettingsChangeAnimationsElements;
type T4 = ActionSettingsChangeAutoNightMode | ActionSettingsChangeStickyHeader;
type T5 = ActionSettingsChangeHour | ActionSettingsChangeHoverMenu;
export type SettingsActions = T1 | T2 | T3 | T4 | T5;
