import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineTemplatePageComponent } from './inline-template-page.component';

describe('InlineTemplatePageComponent', () => {
  let component: InlineTemplatePageComponent;
  let fixture: ComponentFixture<InlineTemplatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineTemplatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineTemplatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
