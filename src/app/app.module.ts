import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FavouritesComponent } from '../favourites/favourites.component';
import { HomeComponent } from '../home/home.component';
import { DetailComponent } from '../detail/detail.component'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CardsService } from '../cards.service';
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FavouritesComponent,
    HomeComponent,
    DetailComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})

export class AppModule { };
