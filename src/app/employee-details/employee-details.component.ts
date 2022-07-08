import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  id:number=0;
  
  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   // Logic to read paramater value from the URL by using Angular Route.
   let pId= this.activatedRoute.snapshot.paramMap.get('id');
   if(pId!=undefined){
    this.id=Number(pId);
   }
  }

  backToList(){
    // Logic to nevigate into route by programetically.
    this.router.navigate(['/employee']);
  }
}
