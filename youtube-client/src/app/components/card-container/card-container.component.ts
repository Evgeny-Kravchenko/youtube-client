import { Component, OnInit } from '@angular/core';
import { IResponseYouTube } from '@youtube/models/ResponseYouTube.model';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
})
export class CardContainerComponent implements OnInit {
  public items: Array<IResponseYouTube>;

  constructor() {}

  public ngOnInit(): void {}
}
