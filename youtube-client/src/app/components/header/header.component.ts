import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public name: string;
  public isShowFilter: boolean;

  public ngOnInit(): void {
    this.isShowFilter = false;
    this.name = 'Your name';
  }

  public toggle(): void {
    this.isShowFilter = !this.isShowFilter;
  }
}
