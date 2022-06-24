import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from "../employee.model";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  title:string="We have handled ngOnChanges event into this component."
  isHideChildComponent=true;
  constructor() { }

  ngOnInit(): void {
  }


  changeTitleOfChildComponent(){
    this.title=this.title+" Now user clicked on button and value of input property has been changed"
  }

  deleteEmployee(isDelete:boolean): boolean{
    isDelete=false;
    return true;
  }

  employeeList():Array<EmployeeModel>{
    return [{id:1,name:"Employee 1"}];
  }

  hideChildComponent():void{
    this.isHideChildComponent=false;
  }

}



export class Department{
  private id:number
  public name :string
  constructor(){
    this.id=1;
    this.name="Employee 2";
  }
}