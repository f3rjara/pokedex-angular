import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PokemonService } from './pokemon.service';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '@src/app/shared/interfaces/pokemon.interface';
import { map, of } from 'rxjs';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  const pokemonExpected: Pokemon = {
    id: 1,
    name: 'bulbasaur',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
    features: [
      { featureTitle: 'No.', featureValue: 1 },
      { featureTitle: 'Level', featureValue: 64 },
      { featureTitle: 'Type', featureValue: 'grass' },
      { featureTitle: 'Hability', featureValue: 'overgrow' },
      { featureTitle: 'Height', featureValue: 7 },
      { featureTitle: 'Weight', featureValue: 69 },
    ],
  };
  const pokedexResponse: any = {
    id: 1,
    name: 'bulbasaur',
    base_experience: 64,
    height: 7,
    weight: 69,
    types: [{ type: { name: 'grass' } }],
    abilities: [{ ability: { name: 'overgrow' } }],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService],
    });
    service = TestBed.inject(PokemonService);
  });

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new PokemonService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a Pokemon with correct values', () => {
    httpClientSpy.get.and.returnValue(of(pokedexResponse));
    service.getPrimaryPokemon(1).subscribe(pokemon => {
      expect(pokemon).toEqual(pokemonExpected);
    });
  });

  it('should map Pokedex to Pokemon with correct values', () => {
    const pokemon = service.mapPokemon(pokedexResponse);
    expect(pokemon).toEqual(pokemonExpected);
  });

  it('should call HTTP GET with correct URL', () => {
    httpClientSpy.get.and.returnValue(of(pokedexResponse));
    service.getPrimaryPokemon(1).subscribe();
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
    expect(httpClientSpy.get.calls.first().args[0]).toBe(
      'https://pokeapi.co/api/v2/pokemon/1'
    );
  });

  it('should return an Observable of type Pokemon', () => {
    httpClientSpy.get.and.returnValue(of(pokedexResponse));
    service.getPrimaryPokemon(1).subscribe(pokemon => {
      expect(pokemon).toEqual(jasmine.any(Object));
      expect(pokemon.id).toEqual(jasmine.any(Number));
      expect(pokemon.name).toEqual(jasmine.any(String));
      expect(pokemon.image).toEqual(jasmine.any(String));
      expect(pokemon.features).toEqual(jasmine.any(Array));
    });
  });
});
