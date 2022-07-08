import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpParentComponent } from './emp-parent/emp-parent.component';
import { EmpChildComponent } from './emp-child/emp-child.component';



@NgModule({
  declarations: [
    EmpParentComponent,
    EmpChildComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EmpParentComponent,
    EmpChildComponent
  ]
})
export class InputOutputDecoratorModule { }
