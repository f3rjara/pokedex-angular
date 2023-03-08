import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureItemComponent } from '../feature-item/feature-item.component';
import { CardFeaturesComponent } from './card-features.component';
import { PokemonFeatures } from '@interfaces/pokemon.interface';
import { By } from '@angular/platform-browser';

describe('CardFeaturesComponent', () => {
  let component: CardFeaturesComponent;
  let fixture: ComponentFixture<CardFeaturesComponent>;

  const features: PokemonFeatures[] = [
    { featureTitle: 'Height', featureValue: '10cm' },
    { featureTitle: 'Weight', featureValue: '20kg' },
    { featureTitle: 'Type', featureValue: 'Fire' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardFeaturesComponent, FeatureItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFeaturesComponent);
    component = fixture.componentInstance;
    component.featuresPokemon = features;
    fixture.detectChanges();
  });

  it('should create CardFeaturesComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should receive pokemon features array input correctly', () => {
    const cardFeaturesComponent = TestBed.createComponent(
      CardFeaturesComponent
    );
    cardFeaturesComponent.componentInstance.featuresPokemon = features;
    fixture.detectChanges();
    expect(cardFeaturesComponent.componentInstance.featuresPokemon).toEqual(
      features
    );
  });

  it('should render correct number of feature item components', () => {
    component.featuresPokemon = features;
    fixture.detectChanges();
    const featureItems =
      fixture.nativeElement.querySelectorAll('app-feature-item');
    expect(featureItems.length).toBe(features.length);
  });

  it('should render card features component', () => {
    component.featuresPokemon = features;
    fixture.detectChanges();

    const featureItemDebugElements = fixture.debugElement.queryAll(
      By.directive(FeatureItemComponent)
    );
    expect(featureItemDebugElements.length).toEqual(features.length);

    featureItemDebugElements.forEach((debugElement: any, i: any) => {
      const featureItemComponent = debugElement.componentInstance;
      expect(featureItemComponent).toBeTruthy();
      expect(featureItemComponent.feature).toEqual(features[i]);
    });
  });
});
