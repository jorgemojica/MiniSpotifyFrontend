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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'tracks', component: TracksComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'playlists', component: PlaylistsComponent },
  { path: 'create-artist', component: CreateArtistComponent },
  { path: 'update-artist/:id', component: UpdateArtistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
