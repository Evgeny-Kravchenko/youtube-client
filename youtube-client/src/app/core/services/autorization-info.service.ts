import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AutorizationInfoService {
  public name: string = localStorage.getItem('name') || 'Your name';
  public subjectName: Subject<string> = new Subject<string>();

  public setName(name: string): void {
    this.name = name;
    this.subjectName.next(this.name);
  }

  public getName(): Observable<string> {
    return this.subjectName.asObservable();
  }
}
