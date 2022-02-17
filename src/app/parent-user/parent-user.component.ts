import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';


@Component({
  selector: 'app-parent-user',
  templateUrl: './parent-user.component.html',
  styleUrls: ['./parent-user.component.css']
})
export class ParentUserComponent implements OnInit {

  doctors:any = [];
  constructor(private _doctorService: DoctorService) { }

  ngOnInit(): void {
    this._doctorService.Get_Doctor_For_user().subscribe(res => {
      this.doctors = res;
    });
  }

}
