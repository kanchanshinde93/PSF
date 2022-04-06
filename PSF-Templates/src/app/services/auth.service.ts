import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.dev';
import { map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiURL = environment.apiUrl;
   authToken: any;
   constructor(private http: HttpClient) {this.authToken = localStorage.getItem('token');}
  //   
  //  }

  //  getUser(){
  //   let url = environment.USERLOGIN.USER_BASE_URL+environment.USERLOGIN.GET_ALL_USERS;
  //       return this.httpClient.get(url);
  // } 

 

  get isLoggedIn(): boolean {
    this.authToken = localStorage.getItem('token');
    return (this.authToken !== null) ? true : false;
  }
  
  getUser(){
    return this.isLoggedIn == null;
  }


  // login(userEmail: string, userPassword: string) {
   
  //   return this.http.post<any>(this.apiURL + 'usersLogin/login', { userEmail, userPassword }).pipe(map((user: any) => {
  //         console.log('userData', user);
  //          return user;
  //       })
  //     );
  // }

  psLogin(email: string, password: string){
    return this.http.post<any>(this.apiURL + 'ps-user/login', {email, password}).pipe(map((user: any) =>{
        console.log('login', user);
        return user
        
    }))
  }

 
  

}
