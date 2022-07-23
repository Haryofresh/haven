import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';



@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    ForgotPwdComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
