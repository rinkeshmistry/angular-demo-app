import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentListComponent } from './department-list/department-list.component';

const routes:Routes=[
    {path:'list', component:DepartmentListComponent},
    {path:'add', component:DepartmentDetailsComponent},
    {path:'', redirectTo:'list', pathMatch:'full'},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ], exports:[
    RouterModule
  ]
})
export class DepartmentRoutingModule { }
