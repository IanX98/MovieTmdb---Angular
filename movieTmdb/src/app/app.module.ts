import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { NgxPaginationModule } from 'ngx-pagination';

import { TmdbApiService } from './tmdbApi.service';
import { TopRatedResolver } from './topRatedResolver.service';
import { SelectedMovieResolver } from './selectedMovieResolver.service';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { Home } from './components/home/home.component';
import { Movie } from './components/movie/movie.component';
import { MovieCard } from './components/movie-card/movie-card.component';
import { Search } from './components/search/search.component';
import { PageNotFound } from './components/page-not-found/pageNotFound.component';
import { TopRatedMovies } from './components/top-rated-films/topRatedMovies.component';

const appRoutes: Routes = [
  {path: '',component: Home,},
  {
    path: 'topRatedMovies',
    component: TopRatedMovies,
    resolve: {
      topRatedData: TopRatedResolver 
    }
  },
  {
    path: 'movie/:id',
    component: Movie,
    resolve: {
      selectedMovie: SelectedMovieResolver
    }
    },
  {path: 'search/:string', component: Search},
  {path: 'not-found', component: PageNotFound},
  {path: '**', redirectTo: '/not-found'},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Home,
    Movie,
    MovieCard,
    Search,
    TopRatedMovies
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatListModule,
    FormsModule,
    HttpClientModule, 
    CommonModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [TmdbApiService, TopRatedResolver, SelectedMovieResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
