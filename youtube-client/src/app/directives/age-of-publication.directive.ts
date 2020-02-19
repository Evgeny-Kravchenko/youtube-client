import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import { timeInMilliseconds, colorFromDate } from '../shared/enums';

@Directive({
  selector: '[appAgeOfPublication]',
})
export class AgeOfPublicationDirective implements OnInit {
  @Input('appAgeOfPublication') private publishedAt: string;
  constructor(private elementRef: ElementRef, private render2: Renderer2) {}

  public ngOnInit(): void {
    this.setBorderColor();
  }

  public setBorderColor(): void {
    const differenceInTime: number = this.getAgePublicationDate();
    let color: string;
    if (differenceInTime < timeInMilliseconds.lessSevenDays) {
      color = colorFromDate.lessSevenDays;
    } else if (differenceInTime < timeInMilliseconds.lessMonth) {
      color = colorFromDate.lessMonth;
    } else {
      color = colorFromDate.lessSixMonths;
    }
    this.render2.setStyle(this.elementRef.nativeElement, 'borderBottom', `5px solid ${color}`);
  }

  public getAgePublicationDate(): number {
    const millisecondsPublished: number = new Date(this.publishedAt).getTime();
    const millisecondsAtTheMoment: number = Date.now();
    return millisecondsAtTheMoment - millisecondsPublished;
  }
}
