import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home1Component } from './home1.component';
import { CoreModule } from '@app/core';
import { TestingModule } from '@testing/utils';
import { NavigationModule } from '@app/navigation/navigation.module';

describe('Home1Component', () => {
  let component: Home1Component;
  let fixture: ComponentFixture<Home1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Home1Component],
      imports: [CoreModule, TestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
