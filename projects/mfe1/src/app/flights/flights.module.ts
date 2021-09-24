import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsSearchComponent } from './flights-search/flights-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHTS_ROUTES } from './flights.routes';
import { AuthLibModule } from 'auth-lib';
import { SharedLibModule } from 'shared-lib';
import { FlightResultsComponent } from './flight-results/flight-results.component';

@NgModule({
  imports: [
    CommonModule,
    AuthLibModule,
    SharedLibModule,
    RouterModule.forChild(FLIGHTS_ROUTES)
  ],
  declarations: [
    FlightsSearchComponent,
    FlightResultsComponent
  ]
})
export class FlightsModule { }
