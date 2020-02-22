import { Component, OnInit } from '@angular/core';
import { RequestResultService } from '../../services/request-result.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public name: string;
  public isShowFilter: boolean;

  constructor(private requestResultService: RequestResultService) {}

  public ngOnInit(): void {
    this.isShowFilter = false;
    this.name = 'Your name';
  }

  public toggle(): void {
    this.isShowFilter = !this.isShowFilter;
  }

  public search(event: MouseEvent, value: string): void {
    event.preventDefault();
    this.requestResultService.sendRequest(value);
  }
}
