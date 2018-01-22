import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSiemaComponent } from './ngx-siema.component';

describe('NgxSiemaComponent', () => {
  let component: NgxSiemaComponent;
  let fixture: ComponentFixture<NgxSiemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSiemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSiemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
