import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Project1Component } from './comp/project1/project1.component';
import { Project2Component } from './comp/project2/project2.component';
import { Project3Component } from './comp/project3/project3.component';
import { Project4Component } from './comp/project4/project4.component';
import { Project5Component } from './comp/project5/project5.component';
import { Project6Component } from './comp/project6/project6.component';
import { Project7Component } from './comp/project7/project7.component';
import { Project8Component } from './comp/project8/project8.component';
import { Project9Component } from './comp/project9/project9.component';
import { Project10Component } from './comp/project10/project10.component';

@NgModule({
  declarations: [
    AppComponent,
    Project1Component,
    Project2Component,
    Project3Component,
    Project4Component,
    Project5Component,
    Project6Component,
    Project7Component,
    Project8Component,
    Project9Component,
    Project10Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
