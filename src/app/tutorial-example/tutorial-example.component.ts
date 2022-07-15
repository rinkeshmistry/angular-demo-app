import { KeyValue } from '@angular/common';
import { Component, OnInit,ViewChild ,ElementRef} from '@angular/core';

@Component({
  selector: 'app-tutorial-example',
  templateUrl: './tutorial-example.component.html',
  styleUrls: ['./tutorial-example.component.scss']
})
export class TutorialExampleComponent {

  @ViewChild('txtViewChild',{static:false}) txtViewChild!
            :ElementRef<HTMLInputElement>;

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

  //Date Pipe 
  currentDate:Date=new Date()

  // Currency Pipe
  price:number=200.50
  
  // Decimal Pipe
  decimalNumber:number=123.3698585

  //This is use for *ngIf Directive
  tasksGrisColumns: string[] = ['task_name', 'task_status'];
  tasksList:Array<KeyValue<string,string>>=[{key:"Angular Session 1", value:"done"},
                                             {key:"Angular Session 2", value:"done"},
                                             {key:"Angular Session 3", value:"new"},
                                             {key:"Angular Session 4", value:"new"},
                                             {key:"Angular Session 5", value:"inprogress"},
                                             {key:"Angular Session 6", value:"inprogress"}]

  

  //This is use for Event binding
  eventBinding(test:string){
    alert(test);
    alert("HTML event triggered");
    
  }

  test(){
    alert('dfsdfsdfsfs')
  }

  // This is use for @ViewChild decorator
  isShowViewChildTextBox:boolean=false;
  clickSetValueInTextBox(){
    this.isShowViewChildTextBox=true
    setTimeout(() => {
      this.txtViewChild.nativeElement.value="This value set into TextBox programmatically by using @ViewChild decorator";  
    }, 1);
  }

}
