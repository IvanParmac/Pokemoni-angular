import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Pokemon, Card } from './pokemon';
import { catchError, map, tap, retry } from 'rxjs/operators';

@Injectable()
export class CardsService {
  pokemons: Pokemon[];
  pokemon: Pokemon;

  constructor(
    private httpClient: HttpClient,
  ) { }

  fetchPokemon(): Observable<Pokemon[]> {
    return this.httpClient.get<Card>('https://api.pokemontcg.io/v1/cards?page=1&pageSize=10')
      .map((res: Card) => { this.pokemons = res.cards; return res.cards; })
  };

  fetchOnePokemon(id: string): Pokemon {
    if (!this.pokemons || !this.pokemons.length) return new Pokemon;
    return this.pokemons.find(pokemon => { return pokemon.id == id });
  };
};

