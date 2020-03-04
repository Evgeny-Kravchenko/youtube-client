import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@youtube/core/pages/header/header.component';
import { RequestResultService } from '@youtube/core/services/request-result.service';
import { SortingByService } from '@youtube/core/services/sorting-by.service';
import { ToggleFilterService } from '@youtube/core/services/toggle-filter.service';
import { AutorizationInfoService } from '@youtube/core/services/autorization-info.service';
import { ActivateGuard } from '@youtube/core/guards/activate.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptor } from '@youtube/core/interceptors/api.interceptor';

@NgModule({
  declarations: [HeaderComponent, NotFoundComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [HeaderComponent, NotFoundComponent],
  providers: [
    RequestResultService,
    SortingByService,
    ActivateGuard,
    ToggleFilterService,
    AutorizationInfoService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
  ],
})
export class CoreModule {}
