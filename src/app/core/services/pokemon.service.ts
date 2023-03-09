import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '@interfaces/pokemon.interface';
import { Pokedex } from '@interfaces/pokedex.interface';
import { map, Observable } from 'rxjs';
import { environment as env } from '@environments/environment';
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  public mapPokemon(pokedex: Pokedex): Pokemon {
    const features = [
      {
        featureTitle: 'No.',
        featureValue: pokedex.id,
      },
      {
        featureTitle: 'Level',
        featureValue: pokedex.base_experience,
      },
      {
        featureTitle: 'Type',
        featureValue: pokedex.types[0].type.name,
      },
      {
        featureTitle: 'Hability',
        featureValue: pokedex.abilities[0].ability.name,
      },
      {
        featureTitle: 'Height',
        featureValue: pokedex.height,
      },
      {
        featureTitle: 'Weight',
        featureValue: pokedex.weight,
      },
    ];
    return {
      id: pokedex.id,
      name: pokedex.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokedex.id}.svg`,
      features: features,
    };
  }

  getPrimaryPokemon(id: number): Observable<Pokemon> {
    return this.http
      .get<Pokedex>(`${env.API_POKEMON_URL}/pokemon/${id}`)
      .pipe(map((pokedex: Pokedex) => this.mapPokemon(pokedex)));
  }
}
