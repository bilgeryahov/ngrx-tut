import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReadComponent } from './components/read/read.component';
import { CreateComponent } from './components/create/create.component';

import { TutorialService } from './services/tutorial.service';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TutorialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
