import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { MovieListComponent } from './shared/movie-list/movie-list.component';

export const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'favorites', component: FavoritesComponent },
  // ...outros caminhos...
];
