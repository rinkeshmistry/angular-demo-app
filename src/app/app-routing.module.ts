import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialExampleComponent } from './tutorial-example/tutorial-example.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { EmployeeListComponent } from './employee-list/employee-list.component'
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'
import { CanactivateGuard } from './canactivate.guard';

const routes: Routes = [
  { path: 'home', component: TutorialExampleComponent, title: "Angular Tutorial sample by Rinkesh Mistry" },
  { path: 'employee', component: EmployeeListComponent, title: "Employees" },
  {
    path: 'employee/:id', component: EmployeeDetailsComponent, title: "Employee Details",
    canActivate: [CanactivateGuard]
  },
  {
    path: 'department',
    loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule)
  },
  {
    path: 'angular-form',
    loadChildren: () => import('./angular-forms/angular-forms.module').then(m => m.AngularFormsModule)
  },
  {
    path: 'observables',
    loadChildren: () => import('./observables/observables.module').then(m => m.ObservablesModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
