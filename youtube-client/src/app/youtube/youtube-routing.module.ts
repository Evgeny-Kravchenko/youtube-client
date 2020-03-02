import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// tslint:disable-next-line
import { SearchResultBlockComponent } from '@youtube/youtube/pages/search-results-block/search-result-block';
// tslint:disable-next-line
import { DetailedInformationPageComponent } from '@youtube/youtube/pages/detailed-information-page/detailed-information-page.component';

const routes: Routes = [
  {
    path: '',
    component: SearchResultBlockComponent,
  },
  {
    path: 'card/:id',
    component: DetailedInformationPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
