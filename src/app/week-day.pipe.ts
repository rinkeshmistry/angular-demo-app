import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekDay'
})
export class WeekDayPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (value===1){
      return "Monday";
    }
    else if(value===2){
      return "Tuesday";
    }
    else if(value===3){
      return "Wednesday";
    }
    else if(value===4){
      return "Thursday";
    }
    else if(value===5){
      return "Friday";
    }
    else if(value===6){
      return "Saturday";
    } 
    else{
      return "Sunday";
    }
  }
}
