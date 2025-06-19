import { Component, OnInit } from '@angular/core';
import { Track } from 'src/app/models/track';
import { AudioPlayerService } from 'src/app/services/audio-player.service';
import { TracksService } from 'src/app/services/tracks.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {

  tracks: Track[] = [];

  constructor(private service: TracksService, private audioPlayerService: AudioPlayerService){}

  ngOnInit(): void {
    this.getAllTracks();
  }

  getAllTracks(){
    this.service.getAllTracks().subscribe(data => {
      this.tracks = data;
      console.log('tracks', this.tracks);
    })
  }

  getTrackName(trackName: string){
    this.audioPlayerService.setTrackTitle(trackName);
  }

}
