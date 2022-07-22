import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { EmployeeModel } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employeeList = [] as EmployeeModel[];
  employeeGridColumns = ['id', 'fullName','gender','dateOfBirth', 'emailAddress','mobileNumber','action'];
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  
  constructor(private router: Router, public employeeService:EmployeeService, public dialog: MatDialog,private snackBar: MatSnackBar) { 
   
  }

  ngOnInit(): void {
    this.binEmployee();
  }

  createNewEmployee(id?:string){
    // Logic to nevigate into route by programetically with paramater.
    if(id==null){
      id="0";
    }
    this.router.navigate(['/employee',  id])
  }

  // Method is used to delete employee
  deleteEmployee(id:string){
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result==true){
        this.employeeService.delete(id).subscribe({
          next:(res)=>{
          this.snackBar.open(`Employee deleted sucessfully`,'Splash', {horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition, duration:5000});
          this.binEmployee();
        },error: (exception )=>{
         this.displayException(exception);
        }});
      }
    });
  }


  // Method is used to bind data 
  binEmployee(){
    this.employeeService.getAll().subscribe(res=>{
      this.employeeList=res;
    });
  }

  // Method is used to display the exception
  displayException(exception:any){
    this.snackBar.open(`Error while creating employee. Ex:${exception}`,'Splash', {horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition,duration:5000})
  }
}
