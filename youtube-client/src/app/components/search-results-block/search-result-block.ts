import { Component, OnInit } from '@angular/core';
import { ICard } from '@youtube/models/Card';
import { youTubeResponse } from '@youtube/mock-response';

@Component({
  selector: 'app-card-container',
  templateUrl: './search-result-block.html',
  styleUrls: ['./search-result-block.scss'],
})
export class SearchResultBlockComponent implements OnInit {
  public items: Array<ICard>;

  constructor() {}

  public ngOnInit(): void {
    this.showResults();
  }

  public showResults(): void {
    this.items = youTubeResponse.items.map(item => {
      return {
        imageUrl: item.snippet.thumbnails.medium.url,
        countViews: item.statistics.viewCount,
        countLikes: item.statistics.likeCount,
        countDislikes: item.statistics.dislikeCount,
        countComment: item.statistics.commentCount,
        title: item.snippet.title,
        publishedAt: item.snippet.publishedAt
      };
    });
  }
}
