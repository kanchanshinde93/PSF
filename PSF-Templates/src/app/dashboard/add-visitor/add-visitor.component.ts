import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { VisitorService } from 'src/app/services/visitor.service';
import { environment } from 'src/environments/environment.dev';

@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.css']
})
export class AddVisitorComponent implements OnInit {
  addVisitorForm : FormGroup |any;
  private apiURL = environment.apiUrl;
  
  
  

  constructor(private fb: FormBuilder, public router : Router, private visitorService: VisitorService, private http: HttpClient) { }

  ngOnInit(): void {
    this.addVisitorForm = this.fb.group({
      visitorName: new FormControl('',[Validators.required]),
      fatherName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(11)]),
      address: new FormControl('', [Validators.required]),
      purpose: new FormControl('', [Validators.required]),
      attendedPerson: new FormControl('', [Validators.required])
    });
  }

  addVisitor(){
  //  this.submitted = true;
   if(!this.addVisitorForm.valid){
     return ;
   }else{

    // var formData: any = new FormData();
    // formData.append("visitorName", this.addVisitorForm.get('visitorName').value);
    // formData.append("visitorFatherName", this.addVisitorForm.get('fatherName').value);
    // formData.append("visitorPhone", this.addVisitorForm.get('phoneNumber').value);
    // formData.append("visitorAddress", this.addVisitorForm.get('address').value);
    // formData.append("purpose", this.addVisitorForm.get('purpose').value);
    // formData.append("attenderName", this.addVisitorForm.get('attendedPerson').value);
    let data = {
       visitorName:this.addVisitorForm.value.visitorName,
       fatherName:this.addVisitorForm.value.fatherName,
       phoneNumber:this.addVisitorForm.value.phoneNumber,
       address:this.addVisitorForm.value.address,
       purpose:this.addVisitorForm.value.purpose,
       attendedPerson:this.addVisitorForm.value.attendedPerson
    }
   
console.log(this.addVisitorForm.value)
    this.visitorService.addVisitors( data).subscribe((data:any) =>{
      console.log(data)
    
    })
     
    }
    

   }
  

  //  this.http.post(this.apiURL + 'visitors/add', formData).subscribe(
  //    (response) => console.log(response),
  //    (error) => console.log(error)
  //    )
  

}
