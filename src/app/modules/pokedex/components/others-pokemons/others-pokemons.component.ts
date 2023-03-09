import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-others-pokemons',
  templateUrl: './others-pokemons.component.html',
  styleUrls: ['./others-pokemons.component.scss'],
})
export class OthersPokemonsComponent {
  @Output() eventOnClick = new EventEmitter<number>();
  @Input() otherPokemons: number[] = [];
  constructor() {}

  showPokemon(id: number) {
    this.eventOnClick.emit(id);
  }
}
