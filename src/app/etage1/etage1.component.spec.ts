import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etage1Component } from './etage1.component';

describe('Etage1Component', () => {
  let component: Etage1Component;
  let fixture: ComponentFixture<Etage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etage1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
