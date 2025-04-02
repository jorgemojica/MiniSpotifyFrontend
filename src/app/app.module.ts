import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { ArtistsService } from './services/artists.service';
import { PlaylistsComponent } from './components/playlists/playlists.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    PlaylistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ArtistsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
