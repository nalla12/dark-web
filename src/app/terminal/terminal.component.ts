import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {
  history: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.history = this.getHistory();
  }

  getHistory() {
    return ['some text', 'some other text','third line']
  }

  pushCmd(cmd: string) {
    this.history.push('Lead-Coding-Website:~ User$ ' + cmd);
  }
}
