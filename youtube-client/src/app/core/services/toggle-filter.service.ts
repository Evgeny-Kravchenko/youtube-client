import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ToggleFilterService {
  private isShow: boolean = false;
  private subject: Subject<boolean> = new Subject<boolean>();

  public setStateFilterBlock(): void {
    this.isShow = !this.isShow;
    this.subject.next(this.isShow);
  }

  public getStateFilterBlock(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
