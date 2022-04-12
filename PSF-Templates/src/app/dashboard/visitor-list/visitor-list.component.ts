import { Component, OnDestroy, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
//import 'rxjs/add/operator/map';
import { identifierModuleUrl, Visitor } from '@angular/compiler';

import { VisitorService } from '../../services/visitor.service';


@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit {

  dtOptions: DataTables.Settings ={};
  visitors: Visitor[] = [];
  

  dtTrigger: Subject<any> = new Subject<any>();

  // constructor(private httpClient: HttpClient) { }
  visitorResult: any;
  visitorList: any;
  userInfo: any;
  constructor(private visitorService: VisitorService) { 
 
  this.userInfo =  localStorage.getItem('psUserInfo')
   console.log(JSON.parse(this.userInfo[0].psId));
   
  }
 
  ngOnInit(): void {
   
    
    this.dtOptions ={
      pagingType: 'full_numbers',
      //pageLength: 10,
      lengthMenu: [5, 10, 15],
      processing: true
    };
    
    this.getVisitorList();
    // this.httpClient.get<Visitor[]>('data/data.json').subscribe(data => {
    //   this.visitors = (data as any).data;
    //   this.dtTrigger.next();
    // });
  } 
   getVisitorList(){
    this.visitorService.getVListById(JSON.parse(this.userInfo.psId)).subscribe((data: any) =>{
      this.visitorResult = data;
      this.visitorList = this.visitorResult.results;
      //console.log(this.visitorList);
      this.dtTrigger.next();
  }); 
    // this.visitorService.getVisitiorslist().subscribe((data: any) =>{
    //     this.visitorResult = data;
    //     this.visitorList = this.visitorResult.results;
    //     console.log(this.visitorList);
    //     this.dtTrigger.next();
    // }); 
  }

//  getpsUserInfo(){
   

//    }
 

  // ngOnDestroy(): void{
  //   this.dtTrigger.unsubscribe();
  // }

}

