import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';


@Injectable({
  providedIn: 'platform'
})
export class AuthLibService {

  public userName: string = 'Waheed';
  public selection = new BehaviorSubject<any>({});
  selected: any;
  //public selection = new EventEmitter();

  public get user(): string {
    return this.userName;
  }

  constructor() { }

  public login(userName: string, password: string): void {
    // Authentication for **honest** users TM. (c) Manfred Steyer
    this.userName = userName;
  }

}
