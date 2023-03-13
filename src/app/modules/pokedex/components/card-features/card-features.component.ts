import { Component, ViewEncapsulation, Input } from '@angular/core';
import { PokemonFeatures } from '@interfaces/pokemon.interface';

@Component({
  selector: 'app-card-features',
  templateUrl: './card-features.component.html',
  styleUrls: ['./card-features.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardFeaturesComponent {
  @Input() featuresPokemon: PokemonFeatures[] = [
    { featureTitle: 'Height', featureValue: '10cm' },
    { featureTitle: 'Weight', featureValue: '20kg' },
    { featureTitle: 'Type', featureValue: 'Fire' },
  ];
  constructor() {}
}
