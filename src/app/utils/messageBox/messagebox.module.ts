import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageboxComponent } from './messagebox.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';

@NgModule({
  declarations: [MessageboxComponent],
  imports: [
    CommonModule,
    NgxSmartModalModule
  ], exports:[
    MessageboxComponent
  ]
})
export class MessageboxModule { }
