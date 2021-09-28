import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';


@Injectable({
  providedIn: 'platform'
})
export class AuthLibService {

  public userName: string = '';
  public selection = new BehaviorSubject<any>({});

  public get user(): string {
    return this.userName;
  }

  constructor() { }

  public login(userName: string, password: string): void {
    this.userName = userName;
  }

}
