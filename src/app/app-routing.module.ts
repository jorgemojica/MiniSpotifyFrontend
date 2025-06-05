import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from './components/artists/artists.component';
import { ArtistComponent } from './components/artist/artist.component';
import { HomeComponent } from './components/home/home.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { GenresComponent } from './components/genres/genres.component';
import { CreateArtistComponent } from './components/create-artist/create-artist.component';
import { UpdateArtistComponent } from './components/update-artist/update-artist.component';
import { LoginComponent } from './components/login/login.component';
import { AuthLayoutComponent } from './components/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './components/layouts/main-layout/main-layout.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { roleGuard } from './guards/role.guard';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   // { path: '', component: LoginComponent },
//   { path: 'artists', component: ArtistsComponent },
//   { path: 'artist/:id', component: ArtistComponent },
//   { path: 'tracks', component: TracksComponent },
//   { path: 'genres', component: GenresComponent },
//   { path: 'playlists', component: PlaylistsComponent },
//   { path: 'create-artist', component: CreateArtistComponent },
//   { path: 'update-artist/:id', component: UpdateArtistComponent }
// ];

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'artists', component: ArtistsComponent },
      { path: 'artist/:id', component: ArtistComponent },
      { path: 'tracks', component: TracksComponent },
      { path: 'genres', component: GenresComponent },
      { path: 'playlists', component: PlaylistsComponent },
      { path: 'create-artist', component: CreateArtistComponent, canActivate: [roleGuard], data: { roles: ['ROLE_ADMIN'] } },
      { path: 'update-artist/:id', component: UpdateArtistComponent, canActivate: [roleGuard], data: { roles: ['ROLE_ADMIN'] } },
      { path: 'profile', component: ProfileComponent }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }
    ]
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
