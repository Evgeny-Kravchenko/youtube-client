import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AutorizationInfoService } from '@youtube/core/services/autorization-info.service';

@Injectable()
export class ToggleFilterService {
  private isShow: boolean = false;
  private subject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isShow);

  constructor(private autorizationInfoService: AutorizationInfoService) {}

  public setStateFilterBlock(): void {
    if (this.autorizationInfoService.name !== 'Your name') {
      this.isShow = !this.isShow;
      this.subject.next(this.isShow);
    }
  }

  public getStateFilterBlock(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
