import { NgxSmartModalService } from 'ngx-smart-modal';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'utl-messagebox',
  templateUrl: './messagebox.component.html'
})
export class MessageboxComponent implements OnInit {
  title;
  message;
  kindOfMB = 'general';
  isInputBox: boolean = false
  inputValue = '';
  button;

  @Output() fieldValue = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Output() ok = new EventEmitter();
  @Output() yes = new EventEmitter();
  @Output() no = new EventEmitter();
  @Output() okOnly = new EventEmitter();
  @Output() isTrue = new EventEmitter();
  @Output() isFalse = new EventEmitter();

  onKeyInput(e){
    this.inputValue = e.target.value;
  }

  onSaveButton() {
    if (this.inputValue.length > 0) {
      this.fieldValue.emit(this.inputValue);
      this.ngxSmartModalService.getModal('generalModal').close();
    }
  }
  onCancelButton(){
    this.cancel.emit(true);
    this.ngxSmartModalService.getModal('generalModal').close();
  }
  onOKButton(){
    this.ok.emit(true);
    this.ngxSmartModalService.getModal('generalModal').close();
  }

  onYesButton(){
    this.yes.emit(true);
    this.ngxSmartModalService.getModal('generalModal').close();
  }

  onNoButton(){
    this.no.emit(true);
    this.ngxSmartModalService.getModal('generalModal').close();
  }

  onOkOnlyButton(){
    this.okOnly.emit(true);
    this.ngxSmartModalService.getModal('generalModal').close();
  }

  onTrueButton(){
    this.isTrue.emit(true);
    this.ngxSmartModalService.getModal('generalModal').close();
  }

  onFalseButton(){
    this.isFalse.emit(true);
    this.ngxSmartModalService.getModal('generalModal').close();
  }

  constructor(private ngxSmartModalService: NgxSmartModalService) {}
  //button can be OK, OKCancel, SaveCancel, YesNo, OkOnly
  public openModal(_title, _message, _kindOfMB = 'general', _isInputBox: boolean = false, _button = 'OK') {
    this.title = _title;
    this.message = _message;
    this.kindOfMB = _kindOfMB;
    this.isInputBox = _isInputBox;
    this.button = _button;
    this.inputValue = '';
    this.ngxSmartModalService.getModal('generalModal').open();
  }

  ngOnInit() {
  }

}
