import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { routeAnimations, selectAuth } from '@app/core';
import { IState as BaseSettingsState } from '@app/settings';

import { IState as BaseExamplesState } from '../examples.state';

interface IState extends BaseSettingsState, BaseExamplesState {}

@Component({
  selector: 'cccc-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  examples = [
    //
    { link: 'todos', label: 'cccc.examples.menu.todos' },
    { link: 'stock-market', label: 'cccc.examples.menu.stocks' },
    { link: 'theming', label: 'cccc.examples.menu.theming' },
    { link: 'crud', label: 'cccc.examples.menu.crud' },
    { link: 'form', label: 'cccc.examples.menu.form' },
    { link: 'notifications', label: 'cccc.examples.menu.notifications' },
    { link: 'authenticated', label: 'cccc.examples.menu.auth', auth: true }
  ];

  constructor(private store: Store<IState>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(
      select(selectAuth),
      map(auth => auth.isAuthenticated)
    );
  }
}
