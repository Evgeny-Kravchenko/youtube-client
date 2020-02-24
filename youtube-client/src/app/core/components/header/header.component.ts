import { Component, OnInit } from '@angular/core';
import { RequestResultService } from '../../services/request-result.service';
import { ToggleFilterService } from '@youtube/core/services/toggle-filter.service';

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
  ) {}

  public ngOnInit(): void {
    this.name = 'Your name';
  }

  public toggle(): void {
    this.filterToggleService.setStateFilterBlock();
  }

  public search(event: MouseEvent, value: string): void {
    event.preventDefault();
    this.requestResultService.sendRequest(value);
  }
}
