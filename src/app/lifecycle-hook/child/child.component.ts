import { Component, Input, OnInit , OnChanges, SimpleChanges, DoCheck,
          OnDestroy} from '@angular/core';
import { from } from 'rxjs';
import { EmployeeModel,Department } from "../employee.model"
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges,DoCheck, OnDestroy {

  @Input('title') title:string='';
  employeeName:string='';


  emp_obj:Department=new Department();

  constructor() { }

  ngOnDestroy(): void{
    console.log('Child component is destroyed! :(');
  }
  
  ngDoCheck(){
    console.log('ngDoCheck triggered');
  }

  ngOnInit(): void {
    console.log('ngOnInit from the child component');
  }

  ngOnChanges(changes:SimpleChanges):void{
    console.log('ngOnChanges triggered', changes);
  }

  
}
