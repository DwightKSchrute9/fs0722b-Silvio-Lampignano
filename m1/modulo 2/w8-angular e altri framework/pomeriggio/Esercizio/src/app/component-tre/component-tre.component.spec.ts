import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTreComponent } from './component-tre.component';

describe('ComponentTreComponent', () => {
  let component: ComponentTreComponent;
  let fixture: ComponentFixture<ComponentTreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentTreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentTreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
