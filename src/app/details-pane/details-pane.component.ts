import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-details-pane',
  templateUrl: './details-pane.component.html',
  styleUrls: ['./details-pane.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsPaneComponent implements OnInit {

  //@Input() activePane: PaneType = 'left';

  constructor() { }

  ngOnInit(): void {
  }



}

//type PaneType = 'left' | 'right';
