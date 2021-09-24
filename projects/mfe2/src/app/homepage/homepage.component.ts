import { Component, OnInit } from '@angular/core';
import { AuthLibService } from 'auth-lib';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private service: AuthLibService) {
   
   }

  ngOnInit(): void {
    
  }

}
