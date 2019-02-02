import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelescopeBackgroundComponent } from './telescope-background.component';

describe('TelescopeBackgroundComponent', () => {
  let component: TelescopeBackgroundComponent;
  let fixture: ComponentFixture<TelescopeBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TelescopeBackgroundComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelescopeBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
