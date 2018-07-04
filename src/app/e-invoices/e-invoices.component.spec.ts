import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EInvoicesComponent } from './e-invoices.component';

describe('EInvoicesComponent', () => {
  let component: EInvoicesComponent;
  let fixture: ComponentFixture<EInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
