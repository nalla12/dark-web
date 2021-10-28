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
      case 'case':
      case 'cases':
        
        break;
      case 'clear':
        break;
      case 'contact':
      case 'kontakt':
        this.history.push('Email: example@leadcoding.dk | Tlf.: 88888888');
        break;
      case 'help':
      case 'hjælp':
        this.history.push(`Her er listen over mulige kommandoer:<ul>
          <li>Command 1</li>
          <li>Command 2</li>
          <li>Command 3</li>
        </ul>`);
        break;
      case 'language':
      case 'languages':
      case 'lang':
      case 'sprog':
        this.history.push(`<ul>
          <li>PHP</li>
          <li>Java</li>
          <li>Swift</li>
          <li>Objective-C</li>
          <li>C#</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
        </ul>`);
        break;
      case 'service':
      case 'services':
      case 'product':
      case 'products':
      case 'produkter':
        this.history.push(`<ul>
          <li>Senior Backend Development</li>
          <li>Software/System Architect</li>
          <li>DevOps / DevSecOps</li>
        </ul>`);
        break;
      case 'technologies':
      case 'technology':
      case 'tekonologi':
      case 'tech stack':
      case 'tech':
        this.history.push(`<ul>
          <li>Infrastructure<ul>
            <li>Google Cloud Platform</li>
            <li>Kubernetes</li>
            <li>Micro Services</li>
            <li>Docker</li>
          </ul></li>
          <li>Web Development<ul>
            <li>PHP<ul>
              <li>Code Igniter</li>
              <li>Laravel</li>
            </ul></li>
            <li>Angular</li>
            <li>Vue</li>
          </ul></li>
          <li>App Development<ul>
            <li>Xamarin</li>
            <li>Android / Java</li>
            <li>iOS / Swift</li>
          </ul></li>
        </ul>`);
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
