import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  connStatus: boolean;
  isLoggedIn: Observable<boolean>;
  constructor(public logS: LoginService, public router: Router) {
    this.isLoggedIn = this.logS.isLoggedIn();
  }
  setMessage(event) {
    this.logS.sendMessage(event.value);
  }
  ngOnInit() {
  }
  login() {
    this.logS.login();
    localStorage.setItem('token', 'JWT');
    this.logS.isLoginSubject.next(true);
    this.router.navigate(['home']);
  }
/*   ngOnDestroy() {
    this.logged();
  } */
}
