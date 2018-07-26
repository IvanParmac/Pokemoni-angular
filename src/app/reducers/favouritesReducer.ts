import { Action } from '@ngrx/store'

import * as PokemonActions from './../actions/actions'

import { Pokemon } from '../../pokemon'

export function favouritesReducer(state: Pokemon[] = [], action: PokemonActions.Actions) {
  switch (action.type) {
    case PokemonActions.TOGGLE_FAVOURITES:
      const index=state.findIndex(function(pokemon){ return pokemon.id===action.payload.id})
      if(index===-1){
      return [...state, action.payload]
      }
      return state.filter(function(pokemon){return pokemon.id!==action.payload.id})
    default:
      return state
  }
}

