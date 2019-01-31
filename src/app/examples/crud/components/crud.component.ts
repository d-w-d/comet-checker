import { v4 as uuid } from 'uuid';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/core';

import { IState } from '../../examples.state';
import { IBook } from '../books.model';
import { ActionBooksUpsertOne, ActionBooksDeleteOne } from '../books.actions';
import { selectSelectedBook, selectAllBooks } from '../books.selectors';

@Component({
  selector: 'cccc-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrudComponent {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  bookFormGroup = this.fb.group(CrudComponent.createBook());
  books$: Observable<IBook[]> = this.store.pipe(select(selectAllBooks));
  selectedBook$: Observable<IBook> = this.store.pipe(select(selectSelectedBook));

  isEditing: boolean;

  static createBook(): IBook {
    return {
      id: uuid(),
      title: '',
      author: '',
      description: ''
    };
  }

  constructor(public store: Store<IState>, public fb: FormBuilder, private router: Router) {}

  select(book: IBook) {
    this.isEditing = false;
    this.router.navigate(['examples/crud', book.id]);
  }

  deselect() {
    this.isEditing = false;
    this.router.navigate(['examples/crud']);
  }

  edit(book: IBook) {
    this.isEditing = true;
    this.bookFormGroup.setValue(book);
  }

  addNew(bookForm: NgForm) {
    bookForm.resetForm();
    this.bookFormGroup.reset();
    this.bookFormGroup.setValue(CrudComponent.createBook());
    this.isEditing = true;
  }

  cancelEditing() {
    this.isEditing = false;
  }

  delete(book: IBook) {
    this.store.dispatch(new ActionBooksDeleteOne({ id: book.id }));
    this.isEditing = false;
    this.router.navigate(['examples/crud']);
  }

  save() {
    if (this.bookFormGroup.valid) {
      const book = this.bookFormGroup.value;
      this.store.dispatch(new ActionBooksUpsertOne({ book }));
      this.isEditing = false;
      this.router.navigate(['examples/crud', book.id]);
    }
  }
}
