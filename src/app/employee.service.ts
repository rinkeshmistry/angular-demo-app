import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class EmployeeService {

  isEnableRouteGuard:boolean=false;
  generateNewNumber =  new Subject<string>();

  constructor() { }
}
