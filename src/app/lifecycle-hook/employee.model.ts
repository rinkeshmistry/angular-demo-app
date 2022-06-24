export interface EmployeeModel{
    id:number;
    name:string
  }



  export class Department{
    private id:number
    public name :string
    constructor(){
      this.id=1;
      this.name="Employee 2";
    }
  }
  
  