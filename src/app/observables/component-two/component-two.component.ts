import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent implements OnInit {

  newNumber:string='';

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {

    this.employeeService.generateNewNumber.subscribe(res=>{
      this.newNumber=res;
    })
  }

}
