import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { FavouritesComponent } from '../favourites/favourites.component'
import { HomeComponent } from '../home/home.component'
import { DetailComponent } from '../detail/detail.component'

const routes: Routes = [
  { path: 'favourites', component: FavouritesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: DetailComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }