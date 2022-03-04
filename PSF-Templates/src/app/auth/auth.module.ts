import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { AuthGuard } from '../guards/auth.guard';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component:LoginComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
 
  {
    path: 'forget',
    component:ForgetPasswordComponent
  }
];



@NgModule({
  declarations: [
    LoginComponent,
    // SignUpComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,FormsModule,
    
    //BrowserAnimationsModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
