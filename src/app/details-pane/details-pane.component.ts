import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-details-pane',
  templateUrl: './details-pane.component.html',
  styleUrls: ['./details-pane.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slide', [
      state('left', style({ transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(-50%)' })),
      transition('* => *', animate(200))
    ])
  ]
})
export class DetailsPaneComponent implements OnInit {

  @Input() activePane: PaneType = 'left';

  constructor() { }

  ngOnInit(): void {
  }

}
type PaneType = 'left' | 'right';
