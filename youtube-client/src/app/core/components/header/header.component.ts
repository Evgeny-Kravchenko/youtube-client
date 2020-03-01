import { Component, OnInit } from '@angular/core';
import { RequestResultService } from '../../services/request-result.service';
import { ToggleFilterService } from '@youtube/core/services/toggle-filter.service';
import { Router } from '@angular/router';
import { AutorizationInfoService } from '@youtube/core/services/autorization-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public name: string;

  constructor(
    private requestResultService: RequestResultService,
    private filterToggleService: ToggleFilterService,
    private router: Router,
    private autorizationInfoService: AutorizationInfoService,
  ) {
    this.autorizationInfoService.getName().subscribe(name => {
      this.name = name;
    });
  }

  public ngOnInit(): void {
    this.name = localStorage.getItem('name') || 'Your name';
  }

  public toggle(): void {
    this.filterToggleService.setStateFilterBlock();
  }

  public search(event: MouseEvent, value: string): void {
    event.preventDefault();
    this.requestResultService.sendRequest(value);
  }

  public mainPage(): void {
    this.router.navigateByUrl('/');
  }

  public goToAuth(): void {
    this.router.navigateByUrl('/auth');
  }
}
