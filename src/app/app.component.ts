import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'Lead Coding';
  public isLeftVisible = true;
}
