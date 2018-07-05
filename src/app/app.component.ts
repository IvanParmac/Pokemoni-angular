import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FavouritesComponent } from '../favourites/favourites.component';
import { HomeComponent } from '../home/home.component';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Pokemon Cards';
};
