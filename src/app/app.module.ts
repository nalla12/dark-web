import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TerminalComponent } from './terminal/terminal.component';
import { TerminalInputComponent } from './terminal/terminal-input/terminal-input.component';
import { DetailsPaneComponent } from './details-pane/details-pane.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    TerminalInputComponent,
    DetailsPaneComponent,
    SliderComponent
  ],
    imports: [
      BrowserModule,
      FormsModule,
      BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
