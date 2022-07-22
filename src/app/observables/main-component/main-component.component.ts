import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { forkJoin, Subject, switchMap } from 'rxjs';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {

  transformedEmployeeData=[] as Array<KeyValue<string,string>>;
  comments=[] as Array<any>;
  photos=[] as Array<any>;
  switchMapOptResponse=[] as Array<any>;
  displayForkJoinOptDiv:boolean=false;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    
    // Logic to Transform HTTP response into specific format or custom format.
    this.employeeService.getOnlyIdnName().subscribe({next:(res)=>{
      this.transformedEmployeeData=res;
    }});


    // Logic to call multiple HTTP request asynchronous manner.
    const forkJoinRequest=forkJoin([this.employeeService.getAllCommments(), this.employeeService.getAllPhotos()]);
    forkJoinRequest.subscribe({next:(res)=>{
      this.comments=res[0];
      this.photos=res[1];
      this.displayForkJoinOptDiv=true;
    }});


    // Logic to call multiple HTTP request into sequentially manner.
    const switchMapRequest=this.employeeService.getAllPhotos().pipe(
        switchMap(data=>this.employeeService.getAllCommments()))
    switchMapRequest.subscribe({next:(res)=>{
      this.switchMapOptResponse=res;
    }})

  }

  generateNewNumber(){
    this.employeeService.generateNewNumber.next( String(Math.floor(Math.random()*90000) + 100000000000));
  }

  cancleSubscribtion(){
    this.employeeService.generateNewNumber.unsubscribe();
  }
}
