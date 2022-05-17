import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonInfoCardComponent } from './pokemon-info-card.component';

describe('PokemonInfoCardComponent', () => {
  let component: PokemonInfoCardComponent;
  let fixture: ComponentFixture<PokemonInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonInfoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
