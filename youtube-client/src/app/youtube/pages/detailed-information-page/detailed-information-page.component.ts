import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestResultService } from '@youtube/core/services/request-result.service';
import { IDetailedInfo } from '@youtube/youtube/models/Detailed-info';

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss'],
})
export class DetailedInformationPageComponent implements OnInit {
  public id: string;
  public detailedInfo: IDetailedInfo;
  constructor(
    private activatedRoute: ActivatedRoute,
    private requestResultService: RequestResultService,
    private router: Router,
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
    });
  }

  public ngOnInit(): void {
    this.detailedInfo = this.requestResultService.getDetailedInformation(this.id);
  }

  public returnToResults(): void {
    this.router.navigateByUrl('');
  }
}
