import { Component, OnInit, Input } from '@angular/core';
import { ICard } from '@youtube/youtube/models/Card';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() private item: ICard;
  public title: string;
  public imageUrl: string;
  public countView: string;
  public countLike: string;
  public countDislike: string;
  public countComments: string;
  public publishedAt: string;

  public ngOnInit(): void {
    this.imageUrl = this.item.imageUrl;
    this.title = this.item.title;
    this.countView = this.item.countViews;
    this.countLike = this.item.countLikes;
    this.countDislike = this.item.countDislikes;
    this.countComments = this.item.countComment;
    this.publishedAt = this.item.publishedAt;
  }
}
