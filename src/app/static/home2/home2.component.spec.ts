import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home2Component } from './home2.component';
import { CoreModule } from '@app/core';
import { TestingModule } from '@testing/utils';
import { NavigationModule } from '@app/navigation/navigation.module';

describe('Home2Component', () => {
  let component: Home2Component;
  let fixture: ComponentFixture<Home2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Home2Component],
      imports: [CoreModule, TestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
