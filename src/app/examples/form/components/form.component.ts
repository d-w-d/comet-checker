import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { filter, debounceTime, take } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { ROUTE_ANIMATIONS_ELEMENTS, NotificationService } from '@app/core';

import { IState } from '../../examples.state';
import { ActionFormUpdate, ActionFormReset } from '../form.actions';
import { selectFormState } from '../form.selectors';
import { IForm } from '../form.model';

@Component({
  selector: 'brznk-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  form = this.fb.group({
    autosave: false,
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
    requestGift: [''],
    birthday: ['', [Validators.required]],
    rating: [0, Validators.required]
  });

  formValueChanges$: Observable<IForm>;

  constructor(
    //
    private fb: FormBuilder,
    private store: Store<IState>,
    private translate: TranslateService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.formValueChanges$ = this.form.valueChanges.pipe(
      debounceTime(500),
      filter((form: IForm) => form.autosave)
    );
    this.store
      .pipe(
        select(selectFormState),
        take(1)
      )
      .subscribe(form => this.form.patchValue(form.form));
  }

  update(form: IForm) {
    this.store.dispatch(new ActionFormUpdate({ form }));
  }

  save() {
    this.store.dispatch(new ActionFormUpdate({ form: this.form.value }));
  }

  submit() {
    if (this.form.valid) {
      this.save();
      this.notificationService.info(
        //
        (this.form.value.requestGift
          ? this.translate.instant('brznk.examples.form.text4') //
          : this.translate.instant('brznk.examples.form.text5')) +
          ' : ' +
          this.translate.instant('brznk.examples.form.text6')
      );
    }
  }

  reset() {
    this.form.reset();
    this.form.clearValidators();
    this.form.clearAsyncValidators();
    this.store.dispatch(new ActionFormReset());
  }
}