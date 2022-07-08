import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialExampleComponent } from './tutorial-example.component';

describe('TutorialExampleComponent', () => {
  let component: TutorialExampleComponent;
  let fixture: ComponentFixture<TutorialExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
