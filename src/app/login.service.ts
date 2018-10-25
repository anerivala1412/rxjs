import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public subject = new BehaviorSubject<any>(true);
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor() { }
  sendMessage(message: boolean) {
    this.subject.next(message); // all subscribers get the new value
  }
  login(): void {
    localStorage.setItem('token', 'JWT');
    this.isLoginSubject.next(true);
  }
  logout(): void {
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
  }
  getMessage() {
    return this.subject.asObservable();
  }
  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
   }
}
