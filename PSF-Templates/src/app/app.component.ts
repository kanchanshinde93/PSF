import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS-Feedback';
 
  public href: string = "";
  layout: any;

  constructor(private router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        console.log(e.url);
        if( e.url=="/"|| e.url=="/login"|| e.url=="/signup"|| e.url=="/forget"){
          this.layout=false;
        }
        else{
          this.layout=true;
        }
      }
    });
  }
}




