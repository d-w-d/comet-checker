import { IAppState } from '@app/core';

export const NIGHT_MODE_THEME = 'BLACK-THEME';

export type Language = 'en' | 'sk' | 'de' | 'fr' | 'es' | 'pt-br';

export enum THEMES {
  'DEFAULT_THEME' = 'DEFAULT-THEME',
  'LIGHT_THEME' = 'LIGHT-THEME',
  'NATURE_THEME' = 'NATURE-THEME',
  'BLACK_THEME' = 'BLACK-THEME',
  'CANDY_THEME' = 'CANDY-THEME'
}

export interface ISettingsState {
  language: string;
  theme: string;
  autoNightMode: boolean;
  nightTheme: string;
  stickyHeader: boolean;
  pageAnimations: boolean;
  pageAnimationsDisabled: boolean;
  elementsAnimations: boolean;
  hour: number;
  isMenuHoveringEnabled: boolean;
}

export interface IState extends IAppState {
  settings: ISettingsState;
}

export interface ISettingsAction {
  type: string;
  payload: Partial<ISettingsState>;
}
