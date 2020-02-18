import { Component, OnInit } from '@angular/core';
import { ICard } from '@youtube/models/Card';
import { RequestResultService } from '../../services/request-result.service';
import { IResponseYouTube } from '@youtube/models/ResponseYouTube.model';
import { SortingByService } from '@youtube/services/sorting-by.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './search-result-block.html',
  styleUrls: ['./search-result-block.scss'],
})
export class SearchResultBlockComponent implements OnInit {
  public items: Array<ICard>;
  public sortParameter: string;
  public filterWord: string;

  constructor(
    private requestResultService: RequestResultService,
    private sortingByService: SortingByService,
  ) {
    this.requestResultService.getResults().subscribe(value => {
      this.showResults(value);
    });
    this.sortingByService.getParameterSorting().subscribe(sortParameter => {
      if (Array.isArray(sortParameter)) {
        this.sortParameter = sortParameter[0];
        this.filterWord = sortParameter[1];
        console.log(this.sortParameter, this.filterWord);
      } else {
        this.sortParameter = sortParameter;
      }
    });
  }

  public ngOnInit(): void {
    this.sortParameter = 'none';
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
