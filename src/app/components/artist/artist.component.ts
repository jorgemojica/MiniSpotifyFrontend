import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';
import { ArtistService } from 'src/app/services/artist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  artistId: string = '';

  artist: Artist = {
    name: '',
    country: '',
    image: ''
  };

  constructor(private service: ArtistService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.artistId = this.route.snapshot.paramMap.get('id') || '';
    this.getArtist(this.artistId);
  }

  getArtist(artistId: string) {
    this.service.getArtist(artistId).subscribe(data => {
      this.artist = data;
      console.log(this.artist);
    })
  }

}
