/*
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Header } from './app/header/header';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
  */

  /* Implementation of module bootstrapping */

import { platformBrowser } from "@angular/platform-browser";
import { AppModule } from "./app/app.module";

  platformBrowser()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));