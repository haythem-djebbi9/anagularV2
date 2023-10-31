import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePayComponent } from './update-pay.component';

describe('UpdatePayComponent', () => {
  let component: UpdatePayComponent;
  let fixture: ComponentFixture<UpdatePayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePayComponent]
    });
    fixture = TestBed.createComponent(UpdatePayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
