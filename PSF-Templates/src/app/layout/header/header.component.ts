import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.logout
  }


  toggle(){
    //console.log("hello")
  }

  logout(){
    localStorage.removeItem('psUserInfo')
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}
