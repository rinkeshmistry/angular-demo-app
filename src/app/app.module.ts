import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InlineTemplatePageComponent } from './inline-template-page/inline-template-page.component';
import { LifecycleHookModule } from './lifecycle-hook/lifecycle-hook.module'

@NgModule({
  declarations: [
    AppComponent,
    InlineTemplatePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LifecycleHookModule,
    FormsModule
  ],
  exports:[
    InlineTemplatePageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
