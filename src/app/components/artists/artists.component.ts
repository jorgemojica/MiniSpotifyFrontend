import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist.model';
import { ArtistsService } from 'src/app/services/artists.service';
import { HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  artists: Artist[] = [];
  // ids = ['6O7MpKrY91vlCd4Osi6XKs', '4NiJW4q9ichVqL1aUsgGAN', '5BtHciL0e0zOP7prIHn3pP', '2xiIXseIJcq3nG7C8fHeBj',
  //        '4MVyzYMgTwdP7Z49wAZHx0', '3vAaWhdBR38Q02ohXqaNHT', '0qT79UgT5tY4yudH9VfsdT', '46gyXjRIvN1NL1eCB8GBxo',
  //        '3ao3jf5d70Tf4fPh2bnXVl', '1Tsag5J854qxeOo2apszug', '0p4nmQO2msCgU4IF37Wi3j', '3jwm6OBdUY5xzFiFIPhMHu'
  //       ];
  // accessToken = 'BQD6QR97DoGcFxhbv9PkKt2C3zF1tgnRfk2TPJDXmMFwhQxJtI_Sm1ZU8Qc6ZcOiXhvC5dFCqXVBNMoBaQyPm29oaQVAmnXVxao9IkWZMOQwnsraxl0W4XXJ407-q7C5lgf3x4z_6us';

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

  // getAllArtists() {
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${this.accessToken}`
  //   });
  
  //   const params = new HttpParams()
  //     .set('ids', this.ids.join(','));

  //   this.service.getAllArtists(this.ids, headers, params).subscribe(data => {
  //     this.artists = data.artists;
  //     console.log('Spotify Artists', data);
  //   });
  // }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/images/DefaultImg.webp';
  }

  getArtistsReport() {
    this.service.getArtistsReport().subscribe({
      next: (response: Blob) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'artist_report.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        window.URL.revokeObjectURL(url); // Limpieza
      },
      error: (error) => {
        console.error('Error descargando el reporte', error);
      }
    });
  }

}
