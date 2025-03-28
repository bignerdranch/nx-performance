import { Route } from '@angular/router';
import { MemoryLeakComponent } from './memory-leak/memory-leak.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

export const appRoutes: Route[] = [
  { path: 'memory-leak', component: MemoryLeakComponent },
  { path: 'hello', component: HelloWorldComponent },
  { path: '', redirectTo: '/hello', pathMatch: 'full' },
];
