import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    
  }

  generateNewNumber(){
    this.employeeService.generateNewNumber.next( String(Math.floor(Math.random()*90000) + 100000000000));
  }

  cancleSubscribtion(){
    this.employeeService.generateNewNumber.unsubscribe();
  }
}
