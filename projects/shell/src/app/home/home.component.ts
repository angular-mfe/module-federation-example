import { Component, OnInit } from '@angular/core';
import { AuthLibService } from 'auth-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  uname;;
  constructor(private service: AuthLibService){
    this.uname = this.service.userName;
  }

  ngOnInit() {
  }

}
