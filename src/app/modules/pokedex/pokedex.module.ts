import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Components */
/* Modules */
import { NavbarModule } from '@shared/components/organims/navbar/navbar.module';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { CardFeaturesComponent } from './components/card-features/card-features.component';
import { FeatureItemComponent } from './components/feature-item/feature-item.component';

@NgModule({
  declarations: [HomeComponent, CardFeaturesComponent, FeatureItemComponent],
  imports: [CommonModule, PokedexRoutingModule, NavbarModule, RouterModule],
})
export class PokedexModule {}
