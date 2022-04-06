import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.dev';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class VisitorService {
  private apiURL = environment.apiUrl;
  constructor(private http: HttpClient) { }

  //Methods to communicate with backend APIs
  /* getVisitors(){
      let url = environment.VISITOR.VISITOR_BASE_URL+environment.VISITOR.GET_ALL_VISITORS;
      return this.httpClient.get(url);
  } */

  // viewVisitor(id: any){

  // }

  // editCustomer(id: any, customerObj: any){

  // }

  // deleteVisitor(id: any){

  // }
  getVisitiorslist() {
    return this.http.get<any>(this.apiURL + 'visitors/list').pipe(map((list: any) => {
      //console.log('visitorsList', list);
      return list;
    })
    );
  }

  addVisitors(data: any) {
    return this.http.post<any>(this.apiURL + 'visitors/add', data).pipe(map((addVisitor: any) => {
      console.log('addedVisitor', addVisitor);
      return addVisitor;
    }


    ))

  }



}
