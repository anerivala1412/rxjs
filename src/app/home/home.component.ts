import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn: Observable<boolean>;
  constructor(public logS: LoginService, public router: Router) {
    this.isLoggedIn = this.logS.isLoggedIn();
  }

  ngOnInit() {
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
    this.logS.isLoginSubject.next(false);
  }
}
