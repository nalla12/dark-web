import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { CmdService } from "../../cmd.service";

@Component({
  selector: 'app-terminal-input',
  templateUrl: './terminal-input.component.html',
  styleUrls: ['./terminal-input.component.css']
})
export class TerminalInputComponent implements OnInit {
  @Output() enterCmd = new EventEmitter();
  inputCmd?: string | undefined;

  constructor(private cmdService: CmdService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.cmdService.checkCmd(this.inputCmd);
    //this.onSubmitEvent.emit(this.cmd);
    this.enterCmd.emit(this.inputCmd);
    this.inputCmd = '';
  }
}
