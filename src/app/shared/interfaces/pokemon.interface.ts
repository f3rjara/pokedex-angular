export interface Pokemon {
  id: number;
  name: string;
  image: string;
  features?: PokemonFeatures[];
}

export interface PokemonFeatures {
  featureTitle: string;
  featureValue: string | number;
}

export const dummyPokemon: Pokemon = {
  id: 5,
  name: 'CHARMELEON',
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg',
  features: [
    {
      featureTitle: 'No.',
      featureValue: 5,
    },
    {
      featureTitle: 'Level',
      featureValue: 142,
    },
    {
      featureTitle: 'Type',
      featureValue: 'Fire',
    },
    {
      featureTitle: 'Hability',
      featureValue: 'Blaze',
    },
    {
      featureTitle: 'Height',
      featureValue: 1.1,
    },
    {
      featureTitle: 'Weight',
      featureValue: 19.0,
    },
  ],
};
