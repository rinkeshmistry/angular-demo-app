import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent implements OnInit {

  newNumber:string='';

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {

    this.employeeService.generateNewNumber.subscribe(res=>{
      this.newNumber=res;
    })
  }

}
