import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeModel } from '../employee.model';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
  providers:[EmployeeService]
})
export class EmployeeDetailsComponent implements OnInit {

  id:string="0";
  reactiveForm:FormGroup= {} as FormGroup;
  reactiveFormSubmitted:boolean=false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';


  constructor(private formBuilder:FormBuilder,
              private router:Router, private activatedRoute:ActivatedRoute, 
              private employeeService:EmployeeService,private snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    // Logic to read paramater value from the URL by using Angular Route.
    let pId= this.activatedRoute.snapshot.paramMap.get('id');
    if(pId!=undefined){
      
      this.id=pId;

      // Logic to get employee details from server and bind it into Form.
      this.employeeService.getById(pId).subscribe({next:(res)=>{
          this.reactiveForm.patchValue(res);
      }, error:(exception)=>{
        this.displayException(exception);
      }})
    }

    // Logic to configure employee form
    this.reactiveForm=this.formBuilder.group({
      fullName:[,[Validators.required]],
      gender:[,[Validators.required]],
      dateOfBirth:[,[Validators.required]],
      emailAddress:[,[Validators.required,
                      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      mobileNumber:[
      ,[Validators.pattern('^(?:(?:\\+|0{0,2})91(\\s*[\-]\\s*)?|[0]?)?[789]\\d{9}$')]],
    })
  }

  // convenience getter for easy access to form fields
  get reactiveFormControl() { return this.reactiveForm.controls; }

  saveEmployeeData(){
    this.reactiveFormSubmitted=true;
    if(this.reactiveForm.valid){
      let empData=this.reactiveForm.value as EmployeeModel;
      
      // Logic to create new employee
      if(this.id=="0"){
        this.employeeService.create( empData).subscribe({
          next:(res)=>{
          this.snackBar.open(`Employee created sucessfully`,'Splash', {horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition, duration:5000});
          this.backToList();
        },error: (exception )=>{
         this.displayException(exception);
        }});
      } else{  // Logic to update employee details
        this.employeeService.update(empData,this.id).subscribe({
          next:(res)=>{
          this.snackBar.open(`Employee updated sucessfully`,'Splash', {horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition, duration:5000});
          this.backToList();
        },error: (exception )=>{
         this.displayException(exception);
        }});
      }
    }
  }

  resetForm(){
    this.reactiveFormSubmitted=false;
    this.reactiveForm.reset();
    const controls = Object.keys(this.reactiveForm.controls);
    controls.forEach(item=>{
      this.reactiveForm.controls[item].setErrors(null);
    })
  }

  backToList(){
    // Logic to nevigate into route by programetically.
    this.router.navigate(['/employee']);
  }

  displayException(exception:any){
    this.snackBar.open(`Error while creating employee. Ex:${exception}`,'Splash', {horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition,duration:5000})
  }
}
