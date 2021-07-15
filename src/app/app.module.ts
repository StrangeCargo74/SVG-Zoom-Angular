import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainDiagramComponent } from './components/main-diagram/main-diagram.component';
import { ZoomTargetComponent } from './components/zoom-target/zoom-target.component';

@NgModule({
  declarations: [
    AppComponent,
    MainDiagramComponent,
    ZoomTargetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
