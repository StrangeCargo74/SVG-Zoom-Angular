import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainDiagramComponent } from './components/main-diagram/main-diagram.component';

@NgModule({
  declarations: [
    AppComponent,
    MainDiagramComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
