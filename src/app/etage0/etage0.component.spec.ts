import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etage0Component } from './etage0.component';

describe('Etage0Component', () => {
  let component: Etage0Component;
  let fixture: ComponentFixture<Etage0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etage0Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etage0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
