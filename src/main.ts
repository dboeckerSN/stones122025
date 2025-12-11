import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app/app-routes';

bootstrapApplication(App, {
  providers: [provideRouter(appRoutes, withComponentInputBinding())],
});
