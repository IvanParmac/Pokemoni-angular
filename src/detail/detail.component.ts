import { Component } from '@angular/core';
import { CardsService } from '../cards.service';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-component',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent {
  title = 'Details';
  card: Pokemon;

  constructor(private cardsService: CardsService,
    private route: ActivatedRoute,
    private location: Location
  ) {
      this.getOnePokemon();
    }

  getOnePokemon(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.card = this.cardsService.fetchOnePokemon(id);
  };
};


