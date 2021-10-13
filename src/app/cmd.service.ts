import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CmdService {
  private history: string[] = [];

  checkCmd(cmd: string | undefined) {

    switch (cmd) {
      case 'about':
      case 'om':
        this.history.push('Full-stack programmør med mere end 10 års erfaring.');
        break;
      case 'language':
      case 'languages':
      case 'sprog':
        this.history.push('PHP, Java, Swift, Objective-C, C#, TypeScript, JavaScript');
        break;
      case 'help':
      case 'hjælp':
        this.history.push('This is a list of possible commands <li>Command 1<li>Command 2 etc');
        break;
      case 'contact':
      case 'kontakt':
        this.history.push('Email: example@leadcoding.dk | Tlf.: 88888888');
        break;
      case 'work':
      case 'portfolio':
      case 'cases':
        this.history.push('Se mit arbejde her: ........');
        break;
      default:
        this.history.push('This command is not recognized');
    }
  }

  get History() {
    return this.history;
  }

}
