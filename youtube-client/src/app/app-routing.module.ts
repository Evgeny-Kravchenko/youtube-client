import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadingGuard } from '@youtube/core/guards/loading.guard';
import { ActivateGuard } from '@youtube/core/guards/activate.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule),
    canLoad: [LoadingGuard],
    canActivate: [ActivateGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
