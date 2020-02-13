import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxSmartModalModule} from 'ngx-smart-modal';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Example1Component } from './pages/example1/example1.component';
import { MessageboxComponent } from './utils/messageBox/messagebox.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgxSmartModalModule.forRoot() ],
  declarations: [ AppComponent, HelloComponent, Example1Component, MessageboxComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
