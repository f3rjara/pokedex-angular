import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Components */
/* Modules */
import { NavbarModule } from '@shared/components/organims/navbar/navbar.module';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, PokedexRoutingModule, NavbarModule, RouterModule],
})
export class PokedexModule {}
