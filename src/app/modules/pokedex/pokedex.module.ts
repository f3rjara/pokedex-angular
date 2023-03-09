import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/* Modules */
import { PokedexRoutingModule } from './pokedex-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NavbarModule } from '@shared/components/organims/navbar/navbar.module';
import { SkeletonModule } from '@shared/components/atoms/skeleton/skeleton.module';
/* Components */
import { CardFeaturesComponent } from './components/card-features/card-features.component';
import { OthersPokemonsComponent } from './components/others-pokemons/others-pokemons.component';

@NgModule({
  declarations: [HomeComponent, CardFeaturesComponent, OthersPokemonsComponent],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    NavbarModule,
    RouterModule,
    SkeletonModule,
  ],
})
export class PokedexModule {}
