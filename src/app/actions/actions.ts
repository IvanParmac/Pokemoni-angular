import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'

import { Pokemon } from '../../pokemon'

export const TOGGLE_FAVOURITES = 'POKEMON TOGGLE'
export const TOGGLE_SORT = 'SORT TOGGLE'
export const ADD_ALL_POKEMON = 'POKEMON ADD ALL'

export class ToggleFavourites implements Action {
  readonly type = TOGGLE_FAVOURITES

  constructor(public payload: Pokemon) { }
}

export class ToggleSort implements Action {
  readonly type = TOGGLE_SORT

  constructor(public payload: string) { }
}

export class AddAllPokemon implements Action {
  readonly type = ADD_ALL_POKEMON

  constructor(public payload: Pokemon[]) { }
}

export type Actions = ToggleFavourites | ToggleSort | AddAllPokemon