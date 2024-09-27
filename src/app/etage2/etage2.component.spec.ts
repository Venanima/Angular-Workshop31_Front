import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etage2Component } from './etage2.component';

describe('Etage2Component', () => {
  let component: Etage2Component;
  let fixture: ComponentFixture<Etage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etage2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
