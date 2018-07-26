import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'

import { AppState } from '../app/app.state'
import * as PokemonActions from '../app/actions/actions'

import { Pokemon } from '../pokemon'

@Component({
  selector: 'app-component',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})

export class FavouritesComponent implements OnInit {
  title = 'Favourites'
  pokemons: Observable<Pokemon[]>

  constructor(private store: Store<AppState>) { }

  removePokemon(pokemon) {
    this.store.dispatch(new PokemonActions.ToggleFavourites(pokemon))
  }

  ngOnInit() {
    this.pokemons = this.store.select('favourites')
  }
}