import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpParentComponent } from './emp-parent.component';

describe('EmpParentComponent', () => {
  let component: EmpParentComponent;
  let fixture: ComponentFixture<EmpParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
