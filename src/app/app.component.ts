import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeeModel } from "../app/lifecycle-hook/employee.model";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularDemoApp';
  
  //This is use for Interpolation
  stringInterpolation="Bind data from TS file to HTML file by using Interpolation."

  //This is use for Property binding
  stringPropertyBinding="Bind data from TS file to HTML file by using Property binding."

  //This is use for Tow Way binding
  stringTwoWayBinding=""

  //This is use for Attribute binding
  taskStatus="new"

  //This is use for *ngIf Directive
  isShowMessage:boolean=false

  //This is use for *ngIf Directive
  movieList:Array<KeyValue<number,string>>=[{key:1, value:"Black Panther: Wakanda Forever"},
                                             {key:2, value:"Thor: Love and Thunder"},
                                             {key:3, value:"Doctor Strange in the Multiverse of Madness"},
                                             {key:4, value:"Halloween Ends"},
                                             {key:5, value:"Avatar: The Way of Water"},
                                             {key:6, value:"Jurassic World Dominion"}]

  
  //This is use for *ngSwitch Directive
  movieCase:string="Movie1"

 

  //This is use for Event binding
  eventBinding(test:string){
    alert(test);
    alert("HTML event triggered");
    
  }

  test(){
    alert('dfsdfsdfsfs')
  }
}
