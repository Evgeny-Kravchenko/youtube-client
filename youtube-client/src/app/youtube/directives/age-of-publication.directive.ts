import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import { timeInMilliseconds, colorFromDate } from '@youtube/youtube/models/enums';

@Directive({
  selector: '[appAgeOfPublication]',
})
export class AgeOfPublicationDirective implements OnInit {
  @Input('appAgeOfPublication') private publishedAt: string;
  @Input() private detailedInfo: string;
  constructor(private elementRef: ElementRef, private render2: Renderer2) {}

  public ngOnInit(): void {
    if (this.detailedInfo === 'shadow') {
      this.setShadowColor();
    } else if (this.detailedInfo === 'background-color') {
      this.setBackgroundColor();
    } else if (this.detailedInfo === 'border-color') {
      this.setBorderColor();
    }
  }

  public getAgePublicationDate(): number {
    const millisecondsPublished: number = new Date(this.publishedAt).getTime();
    const millisecondsAtTheMoment: number = Date.now();
    return millisecondsAtTheMoment - millisecondsPublished;
  }

  public getColorFromDate(): string {
    const differenceInTime: number = this.getAgePublicationDate();
    let color: string;
    if (differenceInTime < timeInMilliseconds.lessSevenDays) {
      color = colorFromDate.lessSevenDays;
    } else if (differenceInTime < timeInMilliseconds.lessMonth) {
      color = colorFromDate.lessMonth;
    } else {
      color = colorFromDate.lessSixMonths;
    }
    return color;
  }

  public setShadowColor(): void {
    const differenceInTime: number = this.getAgePublicationDate();
    let color: string;
    if (differenceInTime < timeInMilliseconds.lessSevenDays) {
      color = `rgba(39, 174, 96, 0.25)`;
    } else if (differenceInTime < timeInMilliseconds.lessMonth) {
      color = `rgba(47, 128, 237, 0.25)`;
    } else {
      color = `rgba(255, 0, 0, 0.25)`;
    }
    this.render2.setStyle(this.elementRef.nativeElement, 'boxShadow', `5px 5px 20px ${color}`);
  }

  public setBackgroundColor(): void {
    let color: string = this.getColorFromDate();
    this.render2.setStyle(this.elementRef.nativeElement, 'backgroundColor', `${color}`);
  }

  public setBorderColor(): void {
    const color: string = this.getColorFromDate();
    this.render2.setStyle(this.elementRef.nativeElement, 'borderBottom', `5px solid ${color}`);
  }
}
