import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { ArtistsService } from './services/artists.service';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { TracksComponent } from './components/tracks/tracks.component';
import { GenresComponent } from './components/genres/genres.component';
import { CreateArtistComponent } from './components/create-artist/create-artist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateArtistComponent } from './components/update-artist/update-artist.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    PlaylistsComponent,
    ArtistComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    TracksComponent,
    GenresComponent,
    CreateArtistComponent,
    UpdateArtistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ArtistsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
