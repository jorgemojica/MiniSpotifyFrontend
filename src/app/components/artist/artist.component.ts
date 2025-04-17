import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';
import { ArtistService } from 'src/app/services/artist.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private service: ArtistService, private route: ActivatedRoute, private router: Router) { }

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

  deleteArtist() {
    console.log('elimino con id', typeof(this.artistId));
    var confirmed = window.confirm(`Are you sure you want to delete ${this.artist.name}?`);
    if (confirmed) {
      this.service.deleteArtist(parseInt(this.artistId)).subscribe({
        next: (message) => {
          alert(message);
          this.router.navigate(['/artists']);
        },
        error: (error) => {
          alert(error);
        }
      })
    }
  }

}
