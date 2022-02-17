import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DoctorService } from '../doctor.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import{Router} from '@angular/router'

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {
  constructor(private fb: FormBuilder,private _doctorService: DoctorService,private _activedRoute: ActivatedRoute,private _router:Router) { 
  }
  doctors:any = [];

  id: any;
  myForm : any;
  ngOnInit(): void {
    const address = this.fb.group({
      country : ['',[Validators.required]],
      city : ['',[Validators.required]],
    });
    this.myForm = this.fb.group({
      name : ['',[Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
      department : new FormControl('',Validators.required),
      email : ['',[Validators.required, Validators.email,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      phone :['',[Validators.required,Validators.maxLength(11),Validators.minLength(11)]],
      image :['',[Validators.required]],
      rate :['',[Validators.required,Validators.maxLength(5),Validators.minLength(0)]],
       doctorAddress :address,
    })
    this.id = this._activedRoute.snapshot.paramMap.get('id');

    this._doctorService.GetSingle_Doctor(this.id).subscribe(res => {
      this.doctors = res;

    });
  }
  get name() {
    return this.myForm.get('name');
  }
  get department() {
    return this.myForm.get('department');
  }
  get email() {
    return this.myForm.get('email');
  }
  get phone() {
    return this.myForm.get('phone');
  }
  get rate() {
    return this.myForm.get('rate');
  }
  get image() {
    return this.myForm.get('image');
  }
  get doctorAddress() {
    return this.myForm.get('doctorAddress').controls;
  }

  onSubmit(){
    this._doctorService.edit_Doctor(this.id ,this.myForm.value).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
    this._router.navigate(['']);

  }

}
