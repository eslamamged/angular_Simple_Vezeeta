import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
private _DoctorUrl ="http://localhost:3000/doctors";
private _Doctor_userUrl ="http://localhost:3000/doctors/user";



  constructor(private http : HttpClient) { 
  }
  Add_Doctor(user:any){
    return this.http.post<any>(this._DoctorUrl,user)
  }
  Get_Doctor(){
    return this.http.get<any>(this._DoctorUrl)
  }
  Delete_Doctor(id:any){
    return this.http.delete<any>(`${this._DoctorUrl}/${id}`)
  }
  Get_Doctor_For_user(){
    return this.http.get<any>(this._Doctor_userUrl)
  }
  edit_Doctor(id:any, data:any){
    return this.http.patch(`${this._DoctorUrl}/${id}`, data);
  }
  GetSingle_Doctor(id:any){
    return this.http.get(`${this._DoctorUrl}/${id}`);
  }
}
