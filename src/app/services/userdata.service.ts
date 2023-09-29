import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  private APIurl ='https://localhost:7113/api/Home/GetDetails';

  constructor(private http:HttpClient) 
  { }

  showData()
  {
    return [
      {name:'John', email:'john@gmail.com', age:25},
      {name:'Marie', email:'john@gmail.com', age:30},
      {name:'Tom', email:'Tom@gmail.com', age:26}
    ]
  }

  GetEmpData()
  {
    return this.http.get(this.APIurl);
  }

  postDatatoAPI(data:any)
  {
    return this.http.post('https://localhost:7113/api/Home/PostDetail',data).subscribe((result) =>{

    console.log(result);

    });
  }

  CheckLogin(loginData:Array<string>)
  {
    return this.http.post("https://localhost:7113/api/Home/Login", 
    {
      Email:loginData[0], 
      Password: loginData[1]
    },
    {
      responseType:'text'
    });
  }
}
