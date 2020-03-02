import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { youTubeResponse } from '@youtube/core/mock-response';
import { ICard } from '@youtube/youtube/models/Card';
import { IDetailedInfo } from '@youtube/youtube/models/Detailed-info';
import { IItem } from '@youtube/youtube/models/ResponeYouTubeItem.model';

@Injectable()
export class RequestResultService {
  private subject: Subject<Array<ICard>> = new Subject<Array<ICard>>();
  public items: Array<ICard>;

  public sendRequest(): void {
    // Some data request...
    this.items = youTubeResponse.items.map(item => {
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
  }

  public getResults(): Observable<Array<ICard>> {
    return this.subject.asObservable();
  }

  public getDetailedInformation(id: string): IDetailedInfo {
    const infoById: IItem = youTubeResponse.items.find(item => item.id === id);
    return {
      title: infoById.snippet.title,
      publishedAt: infoById.snippet.publishedAt,
      description: infoById.snippet.description,
      imageUrl: infoById.snippet.thumbnails.standard.url,
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
