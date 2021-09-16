import { Component, ViewChild, ViewContainerRef, ɵrenderComponent as renderComponent, Inject, Injector, ComponentFactoryResolver } from '@angular/core';
import { AuthLibService } from 'auth-lib';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  uname

  constructor(private service: AuthLibService, http: HttpClient) {
    this.uname = this.service.userName;
    this.service.login('Max', null);
    console.debug('http', http);
  }

}

