import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarquesComponent } from './add-marques.component';

describe('AddMarquesComponent', () => {
  let component: AddMarquesComponent;
  let fixture: ComponentFixture<AddMarquesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMarquesComponent]
    });
    fixture = TestBed.createComponent(AddMarquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
