import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageboxComponent } from '../utils/messageBox/messagebox.component';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html'
})
export class Example1Component implements OnInit {

  public optionsList = ['option1', 'option2', 'option3'];
  @ViewChild(MessageboxComponent, { static: false }) messageBox: MessageboxComponent;

  constructor() { }

  changeOption(myOption) {
    this.messageBox.openModal(
      'Selected Option',
      'You selected: ' + myOption,
      'info',
      false,
      'OKCancel');
  };

  confirm() {
    console.log('confirm-working');
  };

  cancelIt() {
    console.log('cancel-working');
  };

  ngOnInit() {
  };
};
