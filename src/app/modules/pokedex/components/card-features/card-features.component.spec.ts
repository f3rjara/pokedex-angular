import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

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
      declarations: [CardFeaturesComponent],
      imports: [HttpClientModule],
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
    // select card-features__item elements
    const featureItems = fixture.debugElement.queryAll(
      By.css('.card-features__item')
    );
    expect(featureItems.length).toBe(features.length);
  });

  it('should render card features component', () => {
    component.featuresPokemon = features;
    fixture.detectChanges();

    // select card-features__item elements
    const featureItemElements = fixture.debugElement.queryAll(
      By.css('.card-features__item')
    );

    expect(featureItemElements.length).toEqual(features.length);

    featureItemElements.forEach((featureItemElement, index) => {
      const featureTitle = featureItemElement.query(By.css('.features__title'))
        .nativeElement.textContent;
      const featureValue = featureItemElement.query(By.css('.features__data'))
        .nativeElement.textContent;

      expect(featureTitle).toEqual(features[index].featureTitle);
      expect(featureValue).toEqual(features[index].featureValue);
    });
  });
});
