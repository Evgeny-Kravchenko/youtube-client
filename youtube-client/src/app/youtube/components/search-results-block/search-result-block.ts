import { Component, OnInit } from '@angular/core';
import { ICard } from '@youtube/youtube/models/Card';
import { RequestResultService } from '@youtube/core/services/request-result.service';
import { IResponseYouTube } from '@youtube/youtube/models/ResponseYouTube.model';
import { SortingByService } from '@youtube/core/services/sorting-by.service';
import { ToggleFilterService } from '@youtube/core/services/toggle-filter.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './search-result-block.html',
  styleUrls: ['./search-result-block.scss'],
})
export class SearchResultBlockComponent implements OnInit {
  public items: Array<ICard>;
  public sortParameter: string;
  public filterWord: string;
  public isShowFilter: boolean;

  constructor(
    private requestResultService: RequestResultService,
    private sortingByService: SortingByService,
    private filterToggleService: ToggleFilterService,
  ) {
    this.requestResultService.getResults().subscribe(value => {
      this.showResults(value);
    });
    this.sortingByService.getParameterSorting().subscribe(sortParameter => {
      if (Array.isArray(sortParameter)) {
        this.sortParameter = sortParameter[0];
        this.filterWord = sortParameter[1];
      } else {
        this.sortParameter = sortParameter;
        this.filterWord = '';
      }
    });
    this.filterToggleService.getStateFilterBlock().subscribe(state => {
      this.isShowFilter = state;
    });
  }

  public ngOnInit(): void {
    this.sortParameter = 'none';
    this.filterWord = '';
    this.isShowFilter = false;
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
