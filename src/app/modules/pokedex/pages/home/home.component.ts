import { Component, ViewEncapsulation } from '@angular/core';
import { dummyPokemon, Pokemon } from '@interfaces/pokemon.interface';
import { getTypeWithName } from '@shared/helpers/getTypeWithName';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  titleNav: string = 'PokeDex_';
  pokemon: Pokemon = dummyPokemon;
  pokemonName: string = 'Pokemon!';
  constructor() {
    this.getNamePokemon();
  }

  getNamePokemon() {
    let typePokemon = this.pokemon.features?.find(
      feature => feature.featureTitle === 'Type'
    );
    if (typePokemon) {
      this.pokemonName = getTypeWithName(
        typePokemon?.featureValue,
        this.pokemon.name
      );
      return;
    }
    this.pokemonName = getTypeWithName('Default', this.pokemon.name);
  }
}
