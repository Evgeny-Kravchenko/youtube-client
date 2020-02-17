import { Component } from '@angular/core';
import { ICard } from '@youtube/models/Card';
import { RequestResultService } from '../../services/request-result.service';
import { IResponseYouTube } from '@youtube/models/ResponseYouTube.model';

@Component({
  selector: 'app-card-container',
  templateUrl: './search-result-block.html',
  styleUrls: ['./search-result-block.scss'],
})
export class SearchResultBlockComponent {
  public items: Array<ICard>;

  constructor(private requestResultService: RequestResultService) {
    this.requestResultService.getResults().subscribe(value => {
      this.showResults(value);
    });
  }

  public showResults(youTubeResponse: IResponseYouTube): void {
    this.items = youTubeResponse.items.map(item => {
      return {
        imageUrl: item.snippet.thumbnails.medium.url,
        countViews: item.statistics.viewCount,
        countLikes: item.statistics.likeCount,
        countDislikes: item.statistics.dislikeCount,
        countComment: item.statistics.commentCount,
        title: item.snippet.title,
        publishedAt: item.snippet.publishedAt,
      };
    });
  }
}
