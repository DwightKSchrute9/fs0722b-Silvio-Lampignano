import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentUnoComponent } from './component-uno/component-uno.component';
import { ComponentDueComponent } from './component-due/component-due.component';
import { ComponentTreComponent } from './component-tre/component-tre.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentUnoComponent,
    ComponentDueComponent,
    ComponentTreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
