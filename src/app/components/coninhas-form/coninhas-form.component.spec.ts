import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConinhasFormComponent } from './coninhas-form.component';

describe('ConinhasFormComponent', () => {
  let component: ConinhasFormComponent;
  let fixture: ComponentFixture<ConinhasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConinhasFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConinhasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
