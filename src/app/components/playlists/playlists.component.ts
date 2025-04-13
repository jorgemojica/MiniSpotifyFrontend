import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/models/Playlist.model';
import { PlaylistsService } from 'src/app/services/playlists.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {

  playlists: Playlist[] = [];

  constructor(private service: PlaylistsService){

  }

  ngOnInit(): void {
    this.getAllPlaylists();
  }

  getAllPlaylists(){
    this.service.getAllPlaylists().subscribe(data => {
      this.playlists = data;
      console.log('Playlists', this.playlists);
    })
  }

}
