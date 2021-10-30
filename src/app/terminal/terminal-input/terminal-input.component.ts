import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CmdService } from "../../cmd.service";

@Component({
  selector: 'app-terminal-input',
  templateUrl: './terminal-input.component.html',
  styleUrls: ['./terminal-input.component.css']
})
export class TerminalInputComponent implements OnInit {
  @Output() enterCmd = new EventEmitter();
  inputCmd?: string | undefined;
  path: string = 'Lead-Coding-Website:~ User$';

  constructor(private cmdService: CmdService) { }

  ngOnInit(): void {}

  onSubmit(inputCmd: string | undefined) {
    this.enterCmd.emit(inputCmd);
    this.cmdService.checkCmd(inputCmd);
    this.inputCmd = '';
  }
}
