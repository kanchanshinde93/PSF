import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from 'src/app/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;



  constructor(private fb: FormBuilder, public auth: AuthService, public router: Router, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  loginUser() {
    console.log(this.loginForm.value);
    if (this.loginForm.invalid) {
      return;
    } else {

      let email = this.loginForm.value.email;
      let password = this.loginForm.value.password

      this.auth.login(email, password).subscribe(result => {

        console.log(result)
        if (result.status == 200) {
          localStorage.setItem('token', result.token);
          this.toastr.success(result.message)
          this.router.navigate(['./dashboard/visitorList']);
        } else {
          console.log('err')
          this.toastr.error(result.message)



          //this.errorMessage1 = result['data'];
        }
      })
    }

  }

  /*  get user(){
     return this.loginForm.get('email');
   }
 
   get password(){
     return this.loginForm.get('password');
   } */

  clickSub() {
    //console.log(this.loginForm.value);
    this.toastr.error('Email or Password is wrong!', 'Error!', {
      positionClass: 'toast-top-right'
    });


    // to reset all the values from this form
    // this.loginForm.reset();
  }

}



