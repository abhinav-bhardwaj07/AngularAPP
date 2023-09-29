import { Component } from '@angular/core';
import {UserdataService} from '../services/userdata.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  DetailToShow:any;
constructor(private data:UserdataService)
{
  this.DetailToShow = data.showData();
}

CallPostAPI(dataToPost:any)
{
  this.data.postDatatoAPI(dataToPost);
  console.log(dataToPost);
}
}
