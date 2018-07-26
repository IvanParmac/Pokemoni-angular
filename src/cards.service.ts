import { Injectable } from '@angular/core'
import { Observable, of, throwError } from 'rxjs'
import { Http, Response } from '@angular/http'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { catchError, map, tap, retry } from 'rxjs/operators'

import { Pokemon, Cards, Card} from './pokemon'

@Injectable()
export class CardsService {
  pokemons: Pokemon[]
  pokemon: Pokemon

  constructor(
    private httpClient: HttpClient,
  ) { }

  fetchPokemon(): Observable<Pokemon[]> {
    return this.httpClient.get<Cards>('https://api.pokemontcg.io/v1/cards?page=1&pageSize=10')
      .map((res: Cards) => {
        this.pokemons = res.cards
        return res.cards
      })
  }

  fetchOnePokemon(id: string): Observable<Pokemon> {
    return this.httpClient.get<Card>(`https://api.pokemontcg.io/v1/cards/${id}`)
      .map((res: Card) => {
        this.pokemon = res.card
        return res.card
      })
  }
}