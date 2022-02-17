import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import{Router} from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: any;
  isLogined: boolean = false;

  constructor(private fb: FormBuilder,private _auth: AuthService,private _router:Router) { }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }
  get email() {
    return this.LoginForm.get('email');
  }
  get password() {
    return this.LoginForm.get('password');
  }
  loginUserData:any = {};

  onSubmit(){
    this.isLogined = true;
    this._auth.loginUser(this.loginUserData).subscribe(
      res => {
        if(res.status == "fail"){
          alert("email or password invalid");
          this.LoginForm.reset();
       }
       else{
         localStorage.setItem("token",res.token);
         this._router.navigate(['']);
       }
        },
      err => console.log(err)
    )
  }

}
