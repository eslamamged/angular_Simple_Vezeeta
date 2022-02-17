import { Component, OnInit, Input  } from '@angular/core';
import { DoctorService } from '../doctor.service';
import{Router} from '@angular/router'
import { Location } from '@angular/common';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() item:any ={ };
  constructor(private _doctorService: DoctorService,private _router:Router,public _location: Location) { }
  ngOnInit(): void {
  }
  del(){
    this._doctorService.Delete_Doctor(this.item._id).subscribe(
      res=>{
        window.location.reload();
      },
      err=>console.log(err)
      )
      
  }
}
