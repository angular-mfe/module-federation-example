import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthLibService } from 'auth-lib';

@Component({
  selector: 'app-flight-results',
  templateUrl: './flight-results.component.html',
  styleUrls: ['./flight-results.component.css']
})
export class FlightResultsComponent implements OnInit {
   flight_list = [
    {
      'name': 'LXA-LGA',
      'depart': '06:25AM',
      'arrive': '11:00AM',
      'stops': '0',
      'fare': '$300'
    },
    {
      'name': 'LXA-LGA',
      'depart': '06:25AM',
      'arrive': '08:00PM',
      'stops': '3',
      'fare': '$500'
    },
    {
      'name': 'LXA-LGA',
      'depart': '06:25AM',
      'arrive': '1:00PM',
      'stops': '1',
      'fare': '$350'
    },
    {
      'name': 'LXA-LGA',
      'depart': '06:25AM',
      'arrive': '11:00AM',
      'stops': '0',
      'fare': '$300'
    },
    {
      'name': 'LXA-LGA',
      'depart': '09:25AM',
      'arrive': '12:30AM',
      'stops': '1',
      'fare': '$370'
    },
    {
      'name': 'LXA-LGA',
      'depart': '01:25PM',
      'arrive': '5:00AM',
      'stops': '2',
      'fare': '$450'
    },
  ];

  constructor(private service: AuthLibService) { }

  ngOnInit(): void {
  }

  onSelect(item) {
    this.service.selection.next(item);
  }

}
