import { loadRemoteEntry } from '@angular-architects/module-federation';

// Mention the remote entry file in the below promise for the microfrentends
Promise.all([
   loadRemoteEntry('http://localhost:3500/remoteEntry.js', 'mfe1'),
   loadRemoteEntry('http://localhost:4000/remoteEntry.js', 'mfe2'),
   loadRemoteEntry('http://localhost:4500/remoteEntry.js', 'mfe3')
])
.catch(err => console.error('Error loading remote entries', err))
.then(() => import('./bootstrap'))
.catch(err => console.error(err));



