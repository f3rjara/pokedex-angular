import { environment as env } from '@environments/environment';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Pokemon } from '@interfaces/pokemon.interface';
import { getTypeWithName } from '@shared/helpers/getTypeWithName';
import { PokemonService } from '@core/services/pokemon.service';
import { Subject, takeUntil } from 'rxjs';
import {
  getArrayRandomNumbers,
  getRandomNumber,
} from '@shared/helpers/randomNumers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit, OnDestroy {
  titleNav: string = 'PokeDex_';
  pokemon: Pokemon;
  pokemonName: string = 'Pokemon!';
  idPokemon: number;
  arrayOtherPokemons: number[] = [];
  private ngUnsubscribe = new Subject();

  constructor(private pokemonService: PokemonService) {
    this.idPokemon = getRandomNumber(1, env.MAX_POKEMONS);
    this.pokemon = {
      id: this.idPokemon,
      name: 'Pokemon',
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.idPokemon}.svg`,
      features: undefined,
    };
    this.arrayOtherPokemons = getArrayRandomNumbers(1, env.MAX_POKEMONS, 4);
  }

  ngOnInit(): void {
    this.getRandonPokemon();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next(null);
    this.ngUnsubscribe.complete();
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
    this.pokemonName = getTypeWithName('normal', this.pokemon.name);
  }

  getRandonPokemon() {
    this.pokemonService
      .getPrimaryPokemon(this.idPokemon)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(pokemon => {
        this.pokemon = pokemon;
        this.getNamePokemon();
      });
  }

  changePokemon(id: number = 0) {
    this.idPokemon = id || getRandomNumber(1, env.MAX_POKEMONS);
    if (id == 0) {
      this.arrayOtherPokemons = getArrayRandomNumbers(1, env.MAX_POKEMONS, 4);
    }
    this.getRandonPokemon();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
