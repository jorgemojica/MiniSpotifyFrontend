import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioPlayerService {

  url = 'http://localhost:8080/api/audio';

  constructor(private http: HttpClient) { }

  private currentTrackTitle = new BehaviorSubject<string | null>(null);

  setTrackTitle(title: string) {
    this.currentTrackTitle.next(title);
  }

  getTrackTitle() {
    return this.currentTrackTitle.asObservable();
  }

  getAudio(trackName: string) {
  return this.http.get(this.url + '/' + encodeURIComponent(trackName), {
    responseType: 'blob'
  });
}

}
