import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListardatosComponent } from './listardatos.component';

describe('ListardatosComponent', () => {
  let component: ListardatosComponent;
  let fixture: ComponentFixture<ListardatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListardatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListardatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
