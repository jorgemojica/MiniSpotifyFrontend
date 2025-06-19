import { Component, OnInit } from '@angular/core';
import { AudioPlayerService } from 'src/app/services/audio-player.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  audioUrl: string = '';

  constructor(private audioPlayerService: AudioPlayerService) { }

  ngOnInit(): void {
    this.getAudio();
  }

  getAudio() {
    this.audioPlayerService.getTrackTitle().subscribe(title => {
      if (!title) return;

      this.audioPlayerService.getAudio(title).subscribe(
      (response) => {
        this.audioUrl = URL.createObjectURL(response);
      },
      (error) => {
        this.audioUrl = this.audioUrl != '' ? this.audioUrl : '';
        console.log('Track does not exist: ', error);
        alert('Track not available');
      }
      );
    });
  }

}
