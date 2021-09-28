import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const URL1 = 'http://localhost:3500/remoteEntry.js';
const URL2 = 'http://localhost:4000/remoteEntry.js';
const URL3 = 'http://localhost:4500/remoteEntry.js';

export const APP_ROUTES: Routes = [
    // {
    //   path: '',
    //   component: HomeComponent,
    //   pathMatch: 'full'
    // },

    // Your route here:
    // Lazy load the microfrontends as modules
    {
      path: '',
      loadChildren: () => loadRemoteModule({
        remoteEntry: URL1,
        remoteName: 'mfe2',
        exposedModule: './Module'
      })
      .then(m => m.HomepageModule),
      pathMatch: 'full'
    },
    {
      path: 'flights',
      loadChildren: () => loadRemoteModule({
          remoteEntry: URL2,
          remoteName: 'mfe1',
          exposedModule: './Module'
        })
        .then(m => m.FlightsModule) 
    },
    {
      path: 'payment',
      loadChildren: () => loadRemoteModule({
        remoteEntry: URL3,
        remoteName: 'mfe3',
        exposedModule: './Module'
      })
      .then(m => m.PaymentModule) 
    },
    {
      path: '**',
      component: NotFoundComponent
    }

    // DO NOT insert routes after this one.
    // { path:'**', ...} needs to be the LAST one.

];

