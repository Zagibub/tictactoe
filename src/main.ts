import { enableProdMode } from '@angular/core';
import { createStore } from 'redux';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
