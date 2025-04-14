import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Artist } from 'src/app/models/artist.model';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-create-artist',
  templateUrl: './create-artist.component.html',
  styleUrls: ['./create-artist.component.scss']
})
export class CreateArtistComponent {

  artistForm: FormGroup;

  constructor(private fb: FormBuilder, private service: ArtistService, private router: Router) {
    this.artistForm = this.fb.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      image: ['', [Validators.required, Validators.pattern('https?://.+')]]
    })
  }

  onSubmit() {
    if (this.artistForm.valid) {
      const artistToSave: Artist = this.artistForm.value;
      this.service.createArtist(artistToSave).subscribe(
        (response) => {
          console.log('Artist created!');
          this.router.navigate(['/artists']);
        },
        (error) => {
          console.log('An error occurred while creating the artist!', error);
        }
      )
    }
  }

}
