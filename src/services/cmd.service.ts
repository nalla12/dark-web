import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CmdService {

  private currentCmd?: string;

  runCmd(cmd: string) {
    console.log(cmd);
    this.currentCmd = cmd;
    this.checkCmd(cmd);
  }

  checkCmd(cmd: string) {
    switch (cmd) {
      case 'help':
        console.log('help');
        //return 'This is a list of possible commands:<br>Command 1<br>Command 2 etc';
        break;
      case 'contact':
        console.log('contact');
        break;
      case 'work':
      case 'portfolio':
      case 'cases':
        console.log('se mit arbejde');
        break;
      default:
        console.warn('The command is not recognized');
    }
  }

  help() {

  }

}
