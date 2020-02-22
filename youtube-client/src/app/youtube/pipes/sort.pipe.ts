import { Pipe, PipeTransform } from '@angular/core';
import { ICard } from '@youtube/youtube/models/Card';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  public transform(value: Array<ICard>, sortParameter: string): Array<ICard> {
    return sortParameter === 'none' || sortParameter === 'byWordOfSentence' || value === undefined
      ? value
      : this.sortBy(value, sortParameter);
  }

  public sortBy(value: Array<ICard>, sortParameter: string): Array<ICard> {
    if (sortParameter === 'countOfViews') {
      return value.sort((a, b) => {
        return Number(a.countViews) - Number(b.countViews);
      });
    }
    if (sortParameter === 'date') {
      return value.sort((a, b) => {
        const millisecondsA: number  = new Date(a.publishedAt).getTime();
        const millisecondsB: number = new Date(b.publishedAt).getTime();
        return millisecondsA - millisecondsB;
      });
    }
  }
}
