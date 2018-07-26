import { Component, OnInit, DoCheck } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

import { CardsService } from '../cards.service'

import { Pokemon } from '../pokemon'

@Component({
  selector: 'app-component',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {
  title = 'Details'
  pokemon: Pokemon

  constructor(private cardsService: CardsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  getOnePokemon(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.cardsService.fetchOnePokemon(id).forEach(res => this.pokemon = res)
  }

  ngOnInit() {
    this.getOnePokemon()
  }
}