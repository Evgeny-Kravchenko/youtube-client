import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IResponseYouTube } from '@youtube/youtube/models/ResponseYouTube.model';
import { youTubeResponse } from '@youtube/core/mock-response';

@Injectable()
export class RequestResultService {
  private subject: Subject<IResponseYouTube> = new Subject<IResponseYouTube>();

  public sendRequest(value: string): void {
    // Some data request...
    this.subject.next(youTubeResponse);
  }

  public getResults(): Observable<IResponseYouTube> {
    return this.subject.asObservable();
  }
}
