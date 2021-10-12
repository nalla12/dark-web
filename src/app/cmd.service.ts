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
      case 'skills':
      case 'kompetencer':
        this.history.push('HTML, CSS, PHP, SQL, Java, JavaScript, Angular, CodeIgniter, Bootstrap');
        break;
      case 'help':
      case 'hjælp':
        this.history.push('This is a list of possible commands:<br>Command 1<br>Command 2 etc');
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
