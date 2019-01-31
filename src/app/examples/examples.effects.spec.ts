import { Actions, getEffectsMetadata } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { cold, hot } from 'jasmine-marbles';

import {
    ActionSettingsChangeLanguage,
    SettingsActions,
    IState
} from '@app/settings';
import { ActivationEnd } from '@angular/router';
import { TitleService } from '@app/core';
import { ExamplesEffects } from './examples.effects';

describe('SettingsEffects', () => {
    let router: any;
    let titleService: jasmine.SpyObj<TitleService>;
    let translateService: jasmine.SpyObj<TranslateService>;
    let store: jasmine.SpyObj<Store<IState>>;

    beforeEach(() => {
        router = {
            routerState: {
                snapshot: {
                    root: {}
                }
            },
            events: {
                pipe() {}
            }
        };

        titleService = jasmine.createSpyObj('TitleService', ['setTitle']);
        translateService = jasmine.createSpyObj('TranslateService', ['use']);
        store = jasmine.createSpyObj('store', ['pipe']);
    });

    describe('setTranslateServiceLanguage', () => {
        it('should not dispatch action', () => {
            const actions = new Actions<SettingsActions>();
            const effect = new ExamplesEffects(
                actions,
                store,
                translateService,
                router,
                titleService
            );
            const metadata = getEffectsMetadata(effect);

            expect(metadata.setTranslateServiceLanguage).toEqual({
                dispatch: false
            });
        });
    });

    describe('setTitle', () => {
        it('should not dispatch action', () => {
            const actions = new Actions<SettingsActions>();
            const effect = new ExamplesEffects(
                actions,
                store,
                translateService,
                router,
                titleService
            );
            const metadata = getEffectsMetadata(effect);

            expect(metadata.setTitle).toEqual({ dispatch: false });
        });

        it('should setTitle', () => {
            const action = new ActionSettingsChangeLanguage({ language: 'en' });
            const actions = hot('-a', { a: action });

            const routerEvent = new ActivationEnd(router.routerState.snapshot);
            router.events = cold('a', { a: routerEvent });

            const effect = new ExamplesEffects(
                actions,
                store,
                translateService,
                router,
                titleService
            );

            effect.setTitle.subscribe(() => {
                expect(titleService.setTitle).toHaveBeenCalled();
                expect(titleService.setTitle).toHaveBeenCalledWith(
                    router.routerState.snapshot.root,
                    translateService
                );
            });
        });
    });
});
