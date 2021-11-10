import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  Url="http://localhost:5000/users ";
  
  
  constructor(private http:HttpClient) {}
  
 getAllUsers():Observable<any>{
  return this.http.get(this.Url);
  
 }
 createData(data:any):Observable<any>{
   
   return this.http.post(this.Url,data);
   
 }
 deleteeData(id:any):Observable<any>{
   console.log("SERVICE ID",id)
  
  return this.http.delete(`http://localhost:5000/users/${id} `);
}
updateData(data:any,id:any):Observable<any>{
  
 
 return this.http.put(`http://localhost:5000/users/${id}`,data);
}
getSingleData(id:any) :Observable<any>{
   return this.http.get(`http://localhost:5000/users/${id}`);
}
  }

