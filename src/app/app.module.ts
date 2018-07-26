import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'
import { AlertModule } from 'ngx-bootstrap'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { FavouritesComponent } from '../favourites/favourites.component'
import { HomeComponent } from '../home/home.component'
import { DetailComponent } from '../detail/detail.component'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { CardsService } from '../cards.service'
import { favouritesReducer } from './reducers/favouritesReducer'
import { sortReducer } from './reducers/sortReducer'
import { addPokemonReducer } from './reducers/addPokemonReducer'


@NgModule({
  declarations: [
    AppComponent,
    FavouritesComponent,
    HomeComponent,
    DetailComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    StoreModule.forRoot({
      favourites: favouritesReducer,
      sort: sortReducer,
      addPokemon: addPokemonReducer
    }),
    StoreDevtoolsModule.instrument(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
