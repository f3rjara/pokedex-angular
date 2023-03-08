import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonFeatures } from '@interfaces/pokemon.interface';

import { FeatureItemComponent } from './feature-item.component';

describe('FeatureItemComponent', () => {
  let component: FeatureItemComponent;
  let fixture: ComponentFixture<FeatureItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create FeatureItemComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display feature title and value', () => {
    const featureItemComponent = TestBed.createComponent(FeatureItemComponent);
    const feature: PokemonFeatures = {
      featureTitle: 'Height',
      featureValue: '1.2m',
    };
    featureItemComponent.componentInstance.feature = feature;
    fixture.detectChanges();
    const titleElement =
      fixture.nativeElement.querySelector('.features__title');
    const valueElement = fixture.nativeElement.querySelector('.features__data');
    expect(titleElement.textContent).toContain(feature.featureTitle);
    expect(valueElement.textContent).toContain(feature.featureValue);
  });

  it('should receive pokemon feature input correctly', () => {
    const featureItemComponent = TestBed.createComponent(FeatureItemComponent);
    const feature: PokemonFeatures = {
      featureTitle: 'Height',
      featureValue: '1.2m',
    };
    featureItemComponent.componentInstance.feature = feature;
    fixture.detectChanges();
    expect(featureItemComponent.componentInstance.feature).toEqual(feature);
  });

  it('should render feature item component', () => {
    const feature: PokemonFeatures = {
      featureTitle: 'Type',
      featureValue: 'Electric',
    };
    component.feature = feature;
    fixture.detectChanges();
    const featureItem = fixture.nativeElement.querySelector(
      '.card-features__item'
    );
    expect(featureItem).toBeTruthy();
    expect(featureItem.querySelector('.features__title').textContent).toContain(
      feature.featureTitle
    );
    expect(featureItem.querySelector('.features__data').textContent).toContain(
      feature.featureValue
    );
  });
});
