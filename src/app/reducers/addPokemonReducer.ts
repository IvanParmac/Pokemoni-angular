import { Action } from '@ngrx/store'

import * as PokemonActions from './../actions/actions'

import { Pokemon } from '../../pokemon'

export function addPokemonReducer(state: Pokemon[] = [], action: PokemonActions.Actions) {
  switch (action.type) {
    case PokemonActions.ADD_ALL_POKEMON:
      return action.payload
    default:
      return state
  }
}