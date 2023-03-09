import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '@interfaces/pokemon.interface';
import { Pokedex } from '@interfaces/pokedex.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPrimaryPokemon(id: number): Observable<Pokemon> {
    return this.http
      .get<Pokedex>(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .pipe(
        map((pokemon: Pokedex) => {
          const features = [
            {
              featureTitle: 'No.',
              featureValue: pokemon.id,
            },
            {
              featureTitle: 'Level',
              featureValue: pokemon.base_experience,
            },
            {
              featureTitle: 'Type',
              featureValue: pokemon.types[0].type.name,
            },
            {
              featureTitle: 'Hability',
              featureValue: pokemon.abilities[0].ability.name,
            },
            {
              featureTitle: 'Height',
              featureValue: pokemon.height,
            },
            {
              featureTitle: 'Weight',
              featureValue: pokemon.weight,
            },
          ];
          return {
            id: pokemon.id,
            name: pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
            features: features,
          };
        })
      );
  }
}
