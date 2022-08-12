import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFarmerComponent } from './all-farmer.component';

describe('AllFarmerComponent', () => {
  let component: AllFarmerComponent;
  let fixture: ComponentFixture<AllFarmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFarmerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
