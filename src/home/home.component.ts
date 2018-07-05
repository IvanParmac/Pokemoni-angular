import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {CardsService} from '../cards.service';
import {Pokemon} from '../pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  pokemons: Pokemon[]

  constructor(private http:Http, private cardsService: CardsService){
    this.getPokemon();
  }

  getPokemon():void{
    this.cardsService.fetchPokemon().subscribe(pokemons=>{
      this.pokemons=pokemons
    })
  };
};
