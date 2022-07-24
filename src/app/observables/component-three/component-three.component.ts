import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.scss'],
})
export class ComponentThreeComponent implements OnInit {
  newNumber: string = '';

  constructor() {}

  ngOnInit(): void {}
}
