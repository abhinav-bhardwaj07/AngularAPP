import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';

const routes: Routes = [
  {
    path:'about', 
    component:AboutComponent
  },
  {
    path:'user', 
    component:UserComponent
  },
  {
    path:'', 
    component:AppComponent
  },
  {
    path:'**', 
    component:NotfoundpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
