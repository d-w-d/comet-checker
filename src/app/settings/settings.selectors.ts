import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ISettingsState, IState } from './settings.model';

export const selectSettings = createFeatureSelector<IState, ISettingsState>('settings');

// DWD: This seems pointless to me
// export const selectSettings = createSelector(
//   selectSettingsState,
//   (state: ISettingsState) => state
// );

export const selectSettingsLanguage = createSelector(
  selectSettings,
  (settings: ISettingsState) => settings.language
);

export const selectTheme = createSelector(
  selectSettings,
  settings => settings.theme
);

export const selectAutoNightMode = createSelector(
  selectSettings,
  settings => settings.autoNightMode
);

export const selectNightTheme = createSelector(
  selectSettings,
  settings => settings.nightTheme
);

export const selectHour = createSelector(
  selectSettings,
  settings => settings.hour
);

export const selectSettingsStickyHeader = createSelector(
  selectSettings, //DWD
  (settings: ISettingsState) => {
    return settings.stickyHeader;
  }
);

export const selectSettingsHoverMenu = createSelector(
  selectSettings,
  settings => {
    return settings.isMenuHoveringEnabled;
  }
);

export const selectIsNightHour = createSelector(
  selectAutoNightMode,
  selectHour,
  (autoNightMode, hour) => autoNightMode && (hour >= 21 || hour <= 7)
);

export const selectEffectiveTheme = createSelector(
  selectTheme,
  selectNightTheme,
  selectIsNightHour,
  (theme, nightTheme, isNightHour) => (isNightHour ? nightTheme : theme).toLowerCase()
);
