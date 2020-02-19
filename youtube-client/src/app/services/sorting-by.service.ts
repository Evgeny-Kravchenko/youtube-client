import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SortingByService {
  private subject: Subject<string | string[]> = new Subject<string | string[]>();

  public setParameterSorting(sortParameter: string, inpSearch?: string): void {
    inpSearch ? this.subject.next([sortParameter, inpSearch]) : this.subject.next(sortParameter);
  }

  public getParameterSorting(): Observable<string | string[]> {
    return this.subject.asObservable();
  }
}
