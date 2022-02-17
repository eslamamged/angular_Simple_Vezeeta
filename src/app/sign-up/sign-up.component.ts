import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import{Router} from '@angular/router'



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: any;
  isRegistered: boolean = false;

  constructor(private fb: FormBuilder,private _auth: AuthService,private _router:Router) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
        ],
      ],
      password: ['', [Validators.required]],
      passwordConfirmation: ['', [Validators.required]],
    });
  }

  get name() {
    return this.signUpForm.get('name');
  }
  get email() {
    return this.signUpForm.get('email');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get passwordConfirmation() {
    return this.signUpForm.get('passwordConfirmation');
  }
  registerdUserData:any = {};

  onSubmit(){
    this.isRegistered = true;
    this._auth.registerUser(this.registerdUserData).subscribe(
      res => {
        if(res.status == "fail"){
           alert("email found in database please change it");
           this.signUpForm.reset();
        }
        else{
          localStorage.setItem("token",res.token);
          this._router.navigate(['login']);
        }
      },
      err => console.log(err)
    )
  }

}
