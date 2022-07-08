import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-parent',
  templateUrl: './emp-parent.component.html',
  styleUrls: ['./emp-parent.component.scss']
})
export class EmpParentComponent implements OnInit {

  technologies:Array<KeyValue<number,string>> =[];

  constructor() {
    this.technologies.push({key:1,value:"JavaScript"});
    this.technologies.push({key:2,value:"Java"});
    this.technologies.push({key:3,value:"HTML"});
    this.technologies.push({key:4,value:"C"});
    this.technologies.push({key:5,value:"Git"});
    this.technologies.push({key:6,value:"C++"});
    this.technologies.push({key:7,value:"Python"});
    this.technologies.push({key:8,value:"CSS"});
    this.technologies.push({key:9,value:"Blockchain"});
    this.technologies.push({key:10,value:"SQL"});
   }

  ngOnInit(): void {
  }

  technologiesRefreshEvent(newTechnologie:KeyValue<number,string>){
    this.technologies.push(newTechnologie)
  }
}
