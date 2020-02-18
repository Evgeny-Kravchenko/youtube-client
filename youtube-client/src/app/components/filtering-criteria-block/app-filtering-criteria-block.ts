import { Component } from '@angular/core';
import { SortingByService } from '@youtube/services/sorting-by.service';

@Component({
  selector: 'app-filtering-criteria-block',
  templateUrl: './app-filtering-criteria-block.html',
  styleUrls: ['./app-filtering-criteria-block.scss'],
})
export class FilteringBlockComponent {
  constructor(private sortingByService: SortingByService) {}
}
