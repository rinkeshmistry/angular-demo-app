import { KeyValue } from '@angular/common';
import { Component, EventEmitter, 
         Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-emp-child',
  templateUrl: './emp-child.component.html',
  styleUrls: ['./emp-child.component.scss']
})
export class EmpChildComponent implements OnInit {

  // Component Input property declartion by using @Input decorator
  // This is use to recive data from Parent component
  @Input('data') data:Array<KeyValue<number,string>>=[];

  // Component Output property declartion by using @Output decorator
  // This is use to call method of Parent component by using Event
  @Output('dataRefreshEvent') dataRefreshEvent 
          =new EventEmitter<KeyValue<number,string>>()

  constructor() { }

  ngOnInit(): void {

  }

  addNewTechnologies(){
    let newTchnologies={key:11,value:"Cyber Security"};
    //this.data.push(newTchnologies);
    this.dataRefreshEvent.emit(newTchnologies);
  }

}