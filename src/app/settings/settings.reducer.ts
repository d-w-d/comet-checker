import { ISettingsState, NIGHT_MODE_THEME } from './settings.model';
import { SettingsActions, SettingsActionTypes } from './settings.actions';

export const initialState: ISettingsState = {
  language: 'en',
  theme: 'DARK-THEME',
  autoNightMode: false,
  nightTheme: NIGHT_MODE_THEME,
  stickyHeader: true,
  pageAnimations: true,
  pageAnimationsDisabled: false,
  elementsAnimations: true,
  hour: 0,
  isMenuHoveringEnabled: false
};

export function settingsReducer(state: ISettingsState = initialState, action: SettingsActions): ISettingsState {
  switch (action.type) {
    case SettingsActionTypes.CHANGE_LANGUAGE:
    case SettingsActionTypes.CHANGE_THEME:
    case SettingsActionTypes.CHANGE_AUTO_NIGHT_AUTO_MODE:
    case SettingsActionTypes.CHANGE_STICKY_HEADER:
    case SettingsActionTypes.CHANGE_ANIMATIONS_PAGE:
    case SettingsActionTypes.CHANGE_ANIMATIONS_ELEMENTS:
    case SettingsActionTypes.CHANGE_HOUR:
    case SettingsActionTypes.CHANGE_HOVER_MENU:
      // console.log('action.type: ', action.type, action.payload);
      return { ...state, ...action.payload };

    case SettingsActionTypes.CHANGE_ANIMATIONS_PAGE_DISABLED:
      return {
        ...state,
        pageAnimations: false,
        pageAnimationsDisabled: action.payload.pageAnimationsDisabled
      };

    default:
      return state;
  }
}
