import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersPokemonsComponent } from './others-pokemons.component';

describe('OthersPokemonsComponent', () => {
  let component: OthersPokemonsComponent;
  let fixture: ComponentFixture<OthersPokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthersPokemonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OthersPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
