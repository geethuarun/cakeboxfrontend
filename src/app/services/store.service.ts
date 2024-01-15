import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http:HttpClient) {

   }
   signUp(data:any){
      return this.http.post("http://127.0.0.1:8000/api/register/",data)
   }

   getToken(data:any){
    return this.http.post("http://127.0.0.1:8000/api/token/",data)
   }

   getCakes(){
    if("token" in localStorage){
      let token:any=localStorage.getItem("token")
      let headers=new HttpHeaders({
        "Authorization": token,
        "Content-Type": "application/json"
      })
    return this.http.get("http://127.0.0.1:8000/api/cakes/",{headers})
  }
   
   else{
    return new Observable()
   }
  }

  retrieveProduct(id:number){
    if("token" in localStorage){
      let token:any=localStorage.getItem("token")
      let headers=new HttpHeaders({
        "Authorization": token,
        "Content-Type": "application/json"
      })
    return this.http.get(`http://127.0.0.1:8000/api/cakes/${id}/`,{headers})
  }
   
   else{
    return new Observable()
   }

  }
   
}
