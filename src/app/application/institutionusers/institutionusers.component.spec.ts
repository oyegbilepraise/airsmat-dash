import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionusersComponent } from './institutionusers.component';

describe('InstitutionusersComponent', () => {
  let component: InstitutionusersComponent;
  let fixture: ComponentFixture<InstitutionusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionusersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
