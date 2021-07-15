import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: '[app-zoom-target]',
  templateUrl: './zoom-target.component.html',
  styleUrls: ['./zoom-target.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoomTargetComponent {
  @Input() public designX = 100;
  @Input() public designY = 100;
  @Input() public fill = '#FF0000';

  @Output() public zoomToElement = new EventEmitter<SVGRect>();

  constructor(private element: ElementRef) {}

  public click(event: MouseEvent) {
    const rect: SVGRect = this.element.nativeElement.getBBox();

    if (rect) {
      this.zoomToElement.emit(rect);
    }
  }
}
