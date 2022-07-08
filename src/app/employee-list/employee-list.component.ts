import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(private router: Router, public employeeService:EmployeeService) { }

  ngOnInit(): void {
  }

  createNewEmployee(){
    // Logic to nevigate into route by programetically with paramater.
    this.router.navigate(['/employee',   Math.floor(Math.random()*90000) + 10000])
  }
}
