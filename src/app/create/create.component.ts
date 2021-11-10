import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private us:UserService ,private router:ActivatedRoute) { }
  errMsg:any;
  getparamid:any;
  

  ngOnInit(): void {
    this.getparamid = this.router.snapshot.paramMap.get('id');
    this.us.getSingleData(this.getparamid).subscribe((res) =>{
       console.log (res,'selected update data ')
       this.userForm.patchValue({
          first_name:res .first_name,
          email:res .email ,
          phonenumber:res .phonenumber

         })
    })
  }
  userForm = new FormGroup(
    {
      "first_name" : new FormControl('',Validators. required),
      "email":  new FormControl('',Validators. required),
      "phonenumber": new FormControl('',Validators. required)
    }
  )
  userSubmit(){
   if(this.userForm.valid){
   console.log(this.userForm.value);
   this.us.createData(this.userForm.value).subscribe((res)=>{
     console.log(res);
     
     this.userForm.reset();
   })
   }
  
   else{
     this.errMsg ="All Feileds Are Required";
   }
  }
  updateUser(){
 if(this.userForm.valid){
   this.us.updateData(this.userForm.value,this.getparamid).subscribe((res)=>{
 console.log(res);
   })
 }
 else{
   this.errMsg="All Fileda Are Required"
 }
  }

}
