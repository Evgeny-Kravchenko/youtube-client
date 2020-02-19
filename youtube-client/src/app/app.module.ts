import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FilteringBlockComponent } from './components/filtering-criteria-block/app-filtering-criteria-block';
import { SearchResultBlockComponent } from './components/search-results-block/search-result-block';
import { CardItemComponent } from './components/card-item/card-item.component';
import { AgeOfPublicationDirective } from './directives/age-of-publication.directive';
import { SortPipe } from './pipes/sort.pipe';
import { FilterByWordPipe } from './pipes/filter-by-word.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilteringBlockComponent,
    SearchResultBlockComponent,
    CardItemComponent,
    AgeOfPublicationDirective,
    SortPipe,
    FilterByWordPipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
