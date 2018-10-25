import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  message: string;
  subscription: Subscription;

  constructor(public messageService: LoginService) { }

  ngOnInit() {
    this.subscription = this.messageService.subject.subscribe(
      (message) => {
        this.message = message;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
