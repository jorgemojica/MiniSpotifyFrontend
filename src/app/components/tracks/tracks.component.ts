import { Component, OnInit } from '@angular/core';
import { Track } from 'src/app/models/track';
import { TracksService } from 'src/app/services/tracks.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {

  tracks: Track[] = [];

  constructor(private service: TracksService){}

  ngOnInit(): void {
    this.getAllTracks();
  }

  getAllTracks(){
    this.service.getAllTracks().subscribe(data => {
      this.tracks = data;
      console.log('tracks', this.tracks);
    })
  }

}
