import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentThreeComponent } from './component-three/component-three.component';

const routs:Routes=[
  {path:'main',component:MainComponentComponent, title:'Observables Sample Code'},
  {path:'', redirectTo:'main', pathMatch:'full'}
]


@NgModule({
  declarations: [
    ComponentOneComponent,
    ComponentTwoComponent,
    MainComponentComponent,
    ComponentThreeComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routs),
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ]
})
export class ObservablesModule { }
