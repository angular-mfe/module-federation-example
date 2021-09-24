import { Component, ViewChild, ViewContainerRef, ɵrenderComponent as renderComponent, Inject, Injector, ComponentFactoryResolver } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _menu: Object[];
  uname
  selection: any;

  constructor(private service: AuthLibService, http: HttpClient) {
    this.uname = this.service.userName;
    this.service.login('Max', null);
    console.debug('http', http);
    this.service.selection.subscribe((item => this.selection = item));
    console.log(this.selection);
    
  }

  ngOnInit() {
    this._menu = [
      { path: 'book', name: 'Book' },
      { path: 'check-in', name: 'Check-In' },
      { path: 'my-trip', name: 'My-Trips' },
      { path: 'flight-status', name: 'Flight-Status' },
    ];
  }

}

