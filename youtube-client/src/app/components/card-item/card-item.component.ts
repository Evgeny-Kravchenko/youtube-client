import { Component, OnInit } from '@angular/core';
import { IItem } from '@youtube/models/ResponeYouTubeItem.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  private item: IItem;
  public nameItem: string;
  public urlImage: string;
  public countView: number;
  public countLike: number;
  public countDislike: number;
  public countShare: number;

  public ngOnInit(): void {}
}
