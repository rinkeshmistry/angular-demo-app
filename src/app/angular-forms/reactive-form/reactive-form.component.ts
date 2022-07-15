import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  reactiveForm:FormGroup= {} as FormGroup;
  reactiveFormSubmitted:boolean=false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
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
      alert('Employee created sucessfully')
      this.resetForm();
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
}
