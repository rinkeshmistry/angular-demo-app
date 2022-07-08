import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InlineTemplatePageComponent } from './inline-template-page/inline-template-page.component';
import { LifecycleHookModule } from './lifecycle-hook/lifecycle-hook.module'
import { HighlightDirective } from './appen-gender-icon.directive';
import { WeekDayPipe } from './week-day.pipe';
import { InputOutputDecoratorModule } from './input-output-decorator/input-output-decorator.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { TutorialExampleComponent } from './tutorial-example/tutorial-example.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService } from './employee.service';


@NgModule({
  declarations: [
    AppComponent,
    InlineTemplatePageComponent,
    HighlightDirective,
    WeekDayPipe,
    TutorialExampleComponent,
    PageNotFoundComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LifecycleHookModule,
    FormsModule,
    InputOutputDecoratorModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatSlideToggleModule,
    NgxMaterialTimepickerModule
  ],
  exports:[
    InlineTemplatePageComponent
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
