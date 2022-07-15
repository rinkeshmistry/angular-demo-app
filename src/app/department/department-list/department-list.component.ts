import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  createNewDepartment(){
    this.router.navigate(['department/add']);
  }
}
