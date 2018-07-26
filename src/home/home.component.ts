import { Component, OnInit, OnDestroy } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Subscription } from 'rxjs/Subscription'
import { Observable } from 'rxjs/Observable'
import { Store } from '@ngrx/store'
import 'rxjs/add/operator/map'

import { CardsService } from '../cards.service'
import { AppState } from '../app/app.state'
import * as PokemonActions from '../app/actions/actions'

import { Pokemon } from '../pokemon'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
  pokemons: Pokemon[]
  pokemon: Pokemon
  favourites: Pokemon[]
  pokici: Observable<any>
  subscriptionfavourites: Subscription
  subscriptionsort: Subscription
  sort: string

  constructor(private http: Http, private cardsService: CardsService, private store: Store<AppState>) { }

  toggleFavourites(pokemon) {
    this.store.dispatch(new PokemonActions.ToggleFavourites(pokemon))
  }

  isFavourite(pokemon) {
    return this.favourites.findIndex(favourite => favourite.id === pokemon.id) !== -1
  }

  sortPokemon(sort) {
    var newPokemons = this.pokemons

    if (sort === 'hp') {
      newPokemons = newPokemons.sort((pokemon1, pokemon2) => {
        if (pokemon1.hp === 'None') return -1
        if (pokemon2.hp === 'None') return 1
        return (parseInt(pokemon1.hp, 10) - parseInt(pokemon2.hp, 10))
      })
    }

    if (sort === 'name') {
      newPokemons = newPokemons.sort((pokemon1, pokemon2) => {
        if (pokemon1.name < pokemon2.name) {
          return -1
        } else if (pokemon1.name > pokemon2.name) {
          return 1
        } else {
          return 0
        }
      })
    }

    return newPokemons
  }

  ngOnInit() {
    this.store.select('addPokemon').forEach(res => this.pokemons = res)
    this.subscriptionsort = this.store.select('sort').subscribe(res => {
      this.sort = res
      this.pokemons = this.sortPokemon(res)
    })
    this.subscriptionfavourites = this.store.select('favourites').subscribe(res => this.favourites = res)
  }

  ngOnDestroy() {
    this.subscriptionfavourites.unsubscribe()
    this.subscriptionsort.unsubscribe()
  }
}