import { Component, OnInit } from '@angular/core';
import { CmdService } from "../cmd.service";

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {
  history: string[] = [];
  path: string = 'Lead-Coding-Website:~ User$';

  constructor(private cmdService: CmdService) { }

  ngOnInit(): void {
    this.history = this.getHistory();
  }

  getHistory() {
    return this.cmdService.History;
  }

  menuClickCmd(inputCmd: string) {
    this.pushCmd(inputCmd);
    this.cmdService.checkCmd(inputCmd);
  }

  pushCmd(cmd: string) {
    this.history.push(this.path + ' ' + cmd);
  }

  clearHistory() {
    this.cmdService.clearHistory('terminal-history');
  }
}
