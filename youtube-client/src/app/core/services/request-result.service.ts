import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ICard } from '@youtube/youtube/models/Card';
import { IDetailedInfo } from '@youtube/youtube/models/Detailed-info';
import { IItem } from '@youtube/youtube/models/ResponeYouTubeItem.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IResponseYouTube } from '@youtube/youtube/models/ResponseYouTube.model';

@Injectable()
export class RequestResultService {
  private subject: Subject<Array<ICard>> = new Subject<Array<ICard>>();
  public items: Array<ICard>;
  public response: IResponseYouTube;
  public readonly SEARCH_URL: string = 'search';
  public readonly VIDEOS_URL: string = 'videos';

  constructor(private http: HttpClient) {}

  public sendRequest(value: string): void {
    if (value.length >= 3) {
      this.requestToSearch(value).subscribe(response => {
        const id: string = response.items.map(item => item.id.videoId).join(',');
        this.requestToVideo(id).subscribe((responseVideo: IResponseYouTube) => {
          this.response = responseVideo;
          this.items = responseVideo.items.map(item => {
            return {
              imageUrl: item.snippet.thumbnails.medium.url,
              countViews: item.statistics.viewCount,
              countLikes: item.statistics.likeCount,
              countDislikes: item.statistics.dislikeCount,
              countComment: item.statistics.commentCount,
              title: item.snippet.title,
              publishedAt: item.snippet.publishedAt,
              id: item.id,
            };
          });
          this.subject.next(this.items);
        });
      });
    }
  }

  public requestToSearch(value: string): Observable<any> {
    const params: HttpParams = new HttpParams()
      .set('key', environment.API_KEY)
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', '10')
      .set('q', value);
    return this.http.get(this.SEARCH_URL, { params: params });
  }

  public requestToVideo(id: string): Observable<IResponseYouTube>  {
    const params: HttpParams = new HttpParams()
      .set('key', environment.API_KEY)
      .set('id', id)
      .set('part', 'snippet, statistics');
    return this.http.get<IResponseYouTube>(this.VIDEOS_URL, { params: params });
  }

  public getResults(): Observable<Array<ICard>> {
    return this.subject.asObservable();
  }

  public getDetailedInformation(id: string): IDetailedInfo {
    const infoById: IItem = this.response.items.find(item => item.id === id);
    return {
      title: infoById.snippet.title,
      publishedAt: infoById.snippet.publishedAt,
      description: infoById.snippet.description,
      imageUrl: infoById.snippet.thumbnails.high.url,
      countViews: infoById.statistics.viewCount,
      countLikes: infoById.statistics.likeCount,
      countDislikes: infoById.statistics.dislikeCount,
      countComment: infoById.statistics.commentCount,
    };
  }

  public clearResults(): void {
    this.items = [];
  }
}
