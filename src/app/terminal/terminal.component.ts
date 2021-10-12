import { Component, OnInit } from '@angular/core';
import { CmdService } from "../cmd.service";

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {
  history: string[] = [];

  constructor(private cmdService: CmdService) { }

  ngOnInit(): void {
    this.history = this.getHistory();
  }

  getHistory() {
    return this.cmdService.History;
  }

  pushCmd(cmd: string) {
    this.history.push('Lead-Coding-Website:~ User$ ' + cmd);
    console.log(this.history);
  }

  menuClickCmd(inputCmd: string) {
    this.pushCmd(inputCmd);
    this.cmdService.checkCmd(inputCmd);
  }
}
