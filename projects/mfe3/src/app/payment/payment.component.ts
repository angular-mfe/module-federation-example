import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthLibService } from 'auth-lib';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  selection: any;

  constructor(private service: AuthLibService) {
    this.service.selection.subscribe((item) => {
      console.log(item);
      this.selection = [item];
    });
   }

  ngOnInit(): void {
  }

}
