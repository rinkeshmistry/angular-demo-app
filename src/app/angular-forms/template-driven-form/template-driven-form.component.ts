import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeModel } from '../../employee.model';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  employeeDetail={} as EmployeeModel;
  
  constructor() { 
  }

  ngOnInit(): void {
  }

  saveEmployeeData(templateDriveFormSample:NgForm){
    if(templateDriveFormSample.valid){
      alert('Employee created sucessfully')
      this.employeeDetail = {} as EmployeeModel
      templateDriveFormSample.resetForm();
    }
  }

  resetForm(templateDriveFormSample:NgForm){
    templateDriveFormSample.resetForm();
  }
}
