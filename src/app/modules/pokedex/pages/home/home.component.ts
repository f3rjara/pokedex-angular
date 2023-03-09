import { environment } from './../../../../../environments/environment';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { dummyPokemon, Pokemon } from '@interfaces/pokemon.interface';
import { getTypeWithName } from '@shared/helpers/getTypeWithName';
import { PokemonService } from '@src/app/core/services/pokemon.service';
import { Subject, takeUntil } from 'rxjs';

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
  private ngUnsubscribe = new Subject();

  constructor(private pokemonService: PokemonService) {
    this.idPokemon = this.getRandomNumer();
    this.pokemon = {
      id: this.idPokemon,
      name: 'Pokemon',
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.idPokemon}.svg`,
      features: undefined,
    };
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
      console.log(typePokemon);
      this.pokemonName = getTypeWithName(
        typePokemon?.featureValue,
        this.pokemon.name
      );
      return;
    }
    this.pokemonName = getTypeWithName('normal', this.pokemon.name);
  }

  getRandomNumer(): number {
    return Math.floor(Math.random() * environment.MAX_POKEMONS) + 1;
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

  changePokemon() {
    this.idPokemon = this.getRandomNumer();
    this.getRandonPokemon();
  }
}
