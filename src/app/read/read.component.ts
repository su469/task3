import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
 
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  users:any;
    data:any;
  

  constructor(private us:UserService ){
   
  }
  

  ngOnInit(): void {
    
    this.us.getAllUsers().subscribe((res:any)=>{
      console.log(res);
     this.data=res;
    })
    
  }
  deleteId(id:any){
    this.us.deleteeData(id).subscribe((res:any)=>{
      console.log(res);
      this.ngOnInit()
     
    })
  }
  Edit(id:any){
  this.us.getAllUsers().subscribe((res)=>{
    console.log(res);
  
    })
  
  }
    


}
