import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberLuckyComponent } from './number-lucky.component';

describe('NumberLuckyComponent', () => {
  let component: NumberLuckyComponent;
  let fixture: ComponentFixture<NumberLuckyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberLuckyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberLuckyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
