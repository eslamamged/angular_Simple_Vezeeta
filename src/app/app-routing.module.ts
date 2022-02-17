import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LoginComponent} from './login/login.component'
import {EditDoctorComponent} from './edit-doctor/edit-doctor.component'
import {ParentUserComponent} from './parent-user/parent-user.component'
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'',component:ParentComponent,
  canActivate:[AuthGuard]
},
{
  path:'user',component:ParentUserComponent,
},
  {path:'add',component:AddDoctorComponent,
  canActivate:[AuthGuard]
},
  {path:'edit/:id',component:EditDoctorComponent,
  canActivate:[AuthGuard]
},
  {path:'signUp',component:SignUpComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
