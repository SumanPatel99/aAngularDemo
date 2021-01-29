import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { first } from 'rxjs/operators';
import { User } from '../user'
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private AuthService: AuthService, private router: Router) { }

  ngOnInit() {

    this.AuthService.logout()
    this.router.navigate(['/login'])
  }

  
}
