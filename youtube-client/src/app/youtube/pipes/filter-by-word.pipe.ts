import { Pipe, PipeTransform } from '@angular/core';
import { ICard } from '@youtube/youtube/models/Card';

@Pipe({
  name: 'filterByWord',
})
export class FilterByWordPipe implements PipeTransform {
  public transform(value: Array<ICard>, ...args: string[]): Array<ICard> {
    if (args[0] === 'byWordOfSentence' && args[1]) {
      return value.filter(item => {
        if (item.title.toLowerCase().indexOf(args[1].toLowerCase()) !== -1) {
          return true;
        }
      });
    }
    return value;
  }
}
