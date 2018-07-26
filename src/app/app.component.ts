import { Component, OnInit, OnDestroy } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Subscription } from 'rxjs/Subscription'
import { Store } from '@ngrx/store'
import 'rxjs/add/operator/map'

import { FavouritesComponent } from '../favourites/favourites.component'
import { HomeComponent } from '../home/home.component'
import { AppState } from '../app/app.state'
import * as PokemonActions from '../app/actions/actions'
import { CardsService } from '../cards.service'

import { Pokemon } from '../pokemon'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'Pokemon Cards'
  sort: string
  pokemons: Pokemon[]
  subscription: Subscription

  constructor(private store: Store<AppState>, private cardsService: CardsService) { }

  getPokemon(): void {
    this.subscription = this.cardsService.fetchPokemon().subscribe(pokemons => {
      this.store.dispatch(new PokemonActions.AddAllPokemon(pokemons))
    })
  }

  sortBy(sort) {
    this.store.dispatch(new PokemonActions.ToggleSort(sort))
  }

  ngOnInit() {
    this.pokemons = []

    if (this.pokemons.length === 0) { 
      this.getPokemon()
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
