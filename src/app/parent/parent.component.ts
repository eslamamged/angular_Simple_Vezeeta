import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  doctors:any = [];
  constructor(private _doctorService: DoctorService) { }

  ngOnInit(): void {
    this._doctorService.Get_Doctor().subscribe(res => {
      this.doctors = res;
    });
  }
}
