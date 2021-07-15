import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-main-diagram',
  templateUrl: './main-diagram.component.html',
  styleUrls: ['./main-diagram.component.sass'],
})
export class MainDiagramComponent implements AfterViewInit {
  @ViewChild('outerSvg')
  _svg: ElementRef | undefined;

  private currentViewbox?: string;
  private originalViewbox = '0 0 600 600';

  private get svg(): HTMLElement {
    return this._svg?.nativeElement;
  }

  constructor() {}

  ngAfterViewInit(): void {}

  public zoomToElement(rect: SVGRect) {
    let targetViewBox;

    if (this.currentViewbox) {
      targetViewBox = this.originalViewbox;
      this.currentViewbox = undefined;
    } else {
      targetViewBox = `${rect.x} ${rect.y} ${rect.width} ${rect.height}`;
      this.currentViewbox = targetViewBox;
    }

    gsap.to(
      this.svg, //Our SVG
      {
        attr: {
          //This is the AttrPlugin which updates any attribute on every new frame
          viewBox: targetViewBox, //We specify the end values of the animation
        },
        duration: 2,
        ease: 'expo.out',
      }
    );
  }
}
