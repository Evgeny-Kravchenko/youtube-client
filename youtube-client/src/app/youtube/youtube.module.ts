import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeRoutingModule } from './youtube-routing.module';
// tslint:disable-next-line
import { SearchResultBlockComponent } from '@youtube/youtube/pages/search-results-block/search-result-block';
import { CardItemComponent } from '@youtube/youtube/components/card-item/card-item.component';
import { AgeOfPublicationDirective } from '@youtube/youtube/directives/age-of-publication.directive';
import { SortPipe } from '@youtube/youtube/pipes/sort.pipe';
import { FilterByWordPipe } from '@youtube/youtube/pipes/filter-by-word.pipe';
// tslint:disable-next-line
import { FilteringBlockComponent } from '@youtube/youtube/components/filtering-criteria-block/app-filtering-criteria-block';
// tslint:disable-next-line
import { DetailedInformationPageComponent } from './pages/detailed-information-page/detailed-information-page.component';

@NgModule({
  declarations: [
    SearchResultBlockComponent,
    CardItemComponent,
    FilteringBlockComponent,
    AgeOfPublicationDirective,
    SortPipe,
    FilterByWordPipe,
    DetailedInformationPageComponent,
  ],
  imports: [CommonModule, YoutubeRoutingModule],
  exports: [
    SearchResultBlockComponent,
    CardItemComponent,
    FilteringBlockComponent,
    AgeOfPublicationDirective,
    SortPipe,
    FilterByWordPipe,
  ]
})
export class YoutubeModule {}
