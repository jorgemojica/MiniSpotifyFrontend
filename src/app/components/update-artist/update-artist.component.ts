import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from 'src/app/models/artist.model';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-update-artist',
  templateUrl: './update-artist.component.html',
  styleUrls: ['./update-artist.component.scss']
})
export class UpdateArtistComponent implements OnInit {

  artistForm: FormGroup;
  id: string = '';

  constructor(private fb: FormBuilder, private service: ArtistService, private router: Router, private route: ActivatedRoute) {
    this.artistForm = this.fb.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      image: ['', [Validators.required, Validators.pattern('https?://.+')]]
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.fillArtist();
    console.log(this.id);
  }

  fillArtist() {
    this.service.getArtist(this.id).subscribe(artist => {
      this.artistForm.patchValue({
        name: artist.name,
        country: artist.country,
        image: artist.image
      });
    });
  }

  onSubmit() {
    if (this.artistForm.valid) {
      const artist = this.artistForm.value;
      console.log('Data being sent to update:', artist);
      this.service.updateArtist(this.id, artist).subscribe(
        (response) => {
          console.log('Artist updated!', response);
          this.router.navigate(['/artists']);
        },
        (error) => {
          console.log('An error occurred while updating the artist!', error);
        }
      )
    }
  }

}
