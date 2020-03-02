import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AutorizationInfoService {
  private subjectName: Subject<string> = new Subject<string>();

  public setName(name: string): void {
    this.subjectName.next(name);
  }

  public getName(): Observable<string> {
    return this.subjectName.asObservable();
  }
}
