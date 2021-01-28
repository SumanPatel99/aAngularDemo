import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public for_login:boolean = true;
  public for_password:boolean = false;
  constructor( private AuthService:AuthService ) { }

  ngOnInit() {
    if(localStorage.getItem('currentUser')){
      this.for_login = false;
      this.for_password = true;
    }
  }

}
