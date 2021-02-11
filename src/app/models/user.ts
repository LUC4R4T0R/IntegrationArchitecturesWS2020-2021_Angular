export class User{
  constructor(
    public username:string,
    public displayname:string,
    public password:string,
    public group:number = 0,
    public employeeId?:number
  ) {  }
}
