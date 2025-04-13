import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/Genre.model';
import { GenresService } from 'src/app/services/genres.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  genres: Genre[] = [];

  constructor(private service: GenresService){}

  ngOnInit(): void {
    this.getAllGenres();
  }

  getAllGenres(){
    this.service.getAllGenres().subscribe(data => {
      this.genres = data;
      console.log('Genres', this.genres);
    })
  }

}
