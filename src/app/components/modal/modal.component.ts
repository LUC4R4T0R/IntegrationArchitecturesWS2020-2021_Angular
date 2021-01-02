import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ModalInput} from "../../models/modalInput";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() dismissible:boolean = true;
  @Input() title:string;
  @Input() textualContent:string;
  @Input() formContent:ModalInput[];
  @Input() buttons:{};
  outputValues:{} = {};

  @Output() displayModal = new EventEmitter<boolean>();
  @Output() output = new EventEmitter<Object>();

  constructor() { }

  ngOnInit(): void {
    for (let input of this.formContent){
      this.outputValues[input.name] = input.value;
    }
  }

  dismissModal(){
    if(this.dismissible){
      this.displayModal.emit(false);
    }
  }

  submitInput(){
    this.output.emit(this.outputValues);
  }
}
