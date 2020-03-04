import { Component, OnInit } from '@angular/core';
import { RequestResultService } from '../../services/request-result.service';
import { ToggleFilterService } from '@youtube/core/services/toggle-filter.service';
import { Router } from '@angular/router';
import { AutorizationInfoService } from '@youtube/core/services/autorization-info.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public name: string;
  public textInputSearch: Subject<string> = new Subject<string>();

  constructor(
    private requestResultService: RequestResultService,
    private filterToggleService: ToggleFilterService,
    private router: Router,
    private autorizationInfoService: AutorizationInfoService,
  ) {
    this.autorizationInfoService.getName().subscribe(name => {
      this.name = name;
    });
    this.textInputSearch.pipe(debounceTime(500)).subscribe(value => {
      this.search(value);
    });
  }

  public ngOnInit(): void {
    this.name = localStorage.getItem('name') || 'Your name';
  }

  public toggle(): void {
    this.filterToggleService.setStateFilterBlock();
  }

  public search(value: string): void {
    this.requestResultService.sendRequest(value);
  }

  public mainPage(): void {
    this.router.navigateByUrl('/');
  }

  public goToAuth(): void {
    this.router.navigateByUrl('/auth');
  }
}
