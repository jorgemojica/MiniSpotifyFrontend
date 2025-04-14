import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';
import { ArtistsService } from 'src/app/services/artists.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  artists: Artist[] = [];

  constructor(private service: ArtistsService) {

  }

  ngOnInit(): void {
    this.getAllArtists();
  }

  getAllArtists() {
    this.service.getAllArtists().subscribe(data => {
      this.artists = data;
      console.log('Artistas', this.artists);
    });
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/images/DefaultImg.webp';
  }

}
