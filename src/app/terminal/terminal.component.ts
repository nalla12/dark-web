import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {

  public history:string[] = [];
  //public userInput?: any;

  constructor() { }

  ngOnInit(): void {
  }

  addUserInput(userInput: any) {
    this.history.push(userInput);
  }

}
