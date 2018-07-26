import { Action } from '@ngrx/store'

import * as PokemonActions from './../actions/actions'

export function sortReducer(state: string = '', action: PokemonActions.Actions) {
  switch (action.type) {
    case PokemonActions.TOGGLE_SORT:
      return action.payload
    default:
      return state
  }
}