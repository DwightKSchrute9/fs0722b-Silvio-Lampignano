import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDueComponent } from './component-due.component';

describe('ComponentDueComponent', () => {
  let component: ComponentDueComponent;
  let fixture: ComponentFixture<ComponentDueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentDueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
