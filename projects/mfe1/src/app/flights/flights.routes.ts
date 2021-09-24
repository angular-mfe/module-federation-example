import { Routes } from '@angular/router';
import { FlightResultsComponent } from './flight-results/flight-results.component';
import { FlightsSearchComponent } from './flights-search/flights-search.component';

export const FLIGHTS_ROUTES: Routes = [
    {
      path: 'flights-search',
      component: FlightsSearchComponent
    },
    {
      path: 'flight-result',
      component: FlightResultsComponent
    }
];
