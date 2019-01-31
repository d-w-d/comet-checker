import { Store } from '@ngrx/store';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreModule } from '@app/core';
import { MockStore, TestingModule } from '@testing/utils';

import { IState } from '../../examples.state';
import { IBookState } from '../books.model';
import { CrudComponent } from './crud.component';

describe('CrudComponent', () => {
    let component: CrudComponent;
    let fixture: ComponentFixture<CrudComponent>;
    let store: MockStore<IState>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [CoreModule, TestingModule],
            declarations: [CrudComponent]
        }).compileComponents();
        store = TestBed.get(Store);
        store.setState(createState({ ids: [], entities: {} }));
        fixture = TestBed.createComponent(CrudComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

function createState(booksState: IBookState) {
    return {
        examples: {
            books: booksState
        }
    } as IState;
}
