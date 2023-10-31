import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParPaysComponent } from './recherche-par-pays.component';

describe('RechercheParPaysComponent', () => {
  let component: RechercheParPaysComponent;
  let fixture: ComponentFixture<RechercheParPaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheParPaysComponent]
    });
    fixture = TestBed.createComponent(RechercheParPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
