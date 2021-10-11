import {Component, OnInit} from '@angular/core';
import { CmdService } from "../../../services/cmd.service";

@Component({
  selector: 'app-terminal-input',
  templateUrl: './terminal-input.component.html',
  styleUrls: ['./terminal-input.component.css']
})
export class TerminalInputComponent implements OnInit {

  public cmd?: any;
  //@Output() onSubmitEvent = new EventEmitter<any>();

  constructor(private cmdService: CmdService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.cmdService.runCmd(this.cmd);
    //this.onSubmitEvent.emit(this.cmd);

    this.cmd = '';
  }
}
