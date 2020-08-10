import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialAssetsComponent } from './financial-assets.component';

describe('FinancialAssetsComponent', () => {
  let component: FinancialAssetsComponent;
  let fixture: ComponentFixture<FinancialAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
