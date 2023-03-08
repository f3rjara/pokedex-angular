import { Component, Input, ViewEncapsulation } from '@angular/core';
import { PokemonFeatures } from '@interfaces/pokemon.interface';

@Component({
  selector: 'app-feature-item',
  templateUrl: './feature-item.component.html',
  styleUrls: ['./feature-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FeatureItemComponent {
  @Input() feature: PokemonFeatures = {
    featureTitle: 'Height',
    featureValue: '1.2m',
  };
  constructor() {}
}
