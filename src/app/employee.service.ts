import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';
import { EmployeeModel } from './employee.model';
import { environment } from '../environments/environment';
import { KeyValue } from '@angular/common';


@Injectable()
export class EmployeeService {

  isEnableRouteGuard:boolean=false;
  generateNewNumber =  new Subject<string>();

  constructor(private httpClient:HttpClient) { }
  
  // Method is used to fetch all employees
  getAll():Observable<Array<EmployeeModel>>{
    return this.httpClient.get<Array<EmployeeModel>>(`${environment.serverURL}/employee`);
  }

  // Method is used to fetch employee by id
  getById(id:string):Observable<EmployeeModel>{
    return this.httpClient.get<EmployeeModel>(`${environment.serverURL}/employee/${id}`);
  }

  // Method is used to insert new employee
  create(data:EmployeeModel):Observable<EmployeeModel>{
    return this.httpClient.post<EmployeeModel>(`${environment.serverURL}/employee`,data);
  }

  // Method is used to update employee
  update(data:EmployeeModel, id:string):Observable<EmployeeModel>{
    return this.httpClient.put<EmployeeModel>(`${environment.serverURL}/employee/${id}`,data);
  }

  // Method is used to delete employee
  delete(id:string):Observable<any>{
    return this.httpClient.delete<any>(`${environment.serverURL}/employee/${id}`);
  }

  // Method is used to transform API response into Key Value pair list
  getOnlyIdnName():Observable<Array<KeyValue<string,string>>>{
    return this.httpClient.get<Array<EmployeeModel>>(`${environment.serverURL}/employee`).pipe(map(res=>{
      let data = [] as Array<KeyValue<string,string>>;
      res.forEach(item =>{
        data.push({key:item._id,value:item.fullName});
      })
      return data as Array<KeyValue<string,string>>;
    }));
  }

  // Method is used to fetch all comments from the server
  getAllCommments():Observable<Array<any>>{
    return this.httpClient.get<Array<any>>(`${environment.jsonPlaceholderServer}/comments`);
  }

  // Method is used to fetch all photos from the server
  getAllPhotos():Observable<Array<any>>{
    return this.httpClient.get<Array<any>>(`${environment.jsonPlaceholderServer}/photos`);
  }

}
