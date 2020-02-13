import { Component, OnInit } from '@angular/core';
import { IResponseYouTube } from '@youtube/models/ResponseYouTube.model';

@Component({
  selector: 'app-card-container',
  templateUrl: './search-result-block.html',
  styleUrls: ['./search-result-block.scss'],
})
export class SearchResultBlockComponent implements OnInit {
  public items: Array<IResponseYouTube>;

  constructor() {}

  public ngOnInit(): void {}
}
