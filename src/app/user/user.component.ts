import { Component } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  Details:any;
  apiData:any;
  constructor(private data:UserdataService)
  {
    this.Details = data.showData();
    data.GetEmpData().subscribe((x)=> {
      
      this.apiData= x;
      console.log (this.apiData)
      
    });
    
  }
  
  // data = [
  //   {name:'John', email:'john@gmail.com'},
  //   {name:'Marie', email:'john@gmail.com'},
  //   {name:'Tom', email:'Tom@gmail.com'}
  // ]



}
