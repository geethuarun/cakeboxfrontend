import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CakelistComponent } from './cakelist/cakelist.component';
import { CakedetailComponent } from './cakedetail/cakedetail.component';

const routes: Routes = [
  {path:"register",component:RegisterComponent},
  {path:"",component:LoginComponent},
  {path:"cakes",component:CakelistComponent},
  {path:"cakes/:id",component:CakedetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
