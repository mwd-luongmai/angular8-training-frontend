import 'hammerjs'
import {
  enableProdMode,
  TRANSLATIONS,
  TRANSLATIONS_FORMAT,
  MissingTranslationStrategy,
} from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'

if (environment.production) {
  enableProdMode()
}

if (localStorage.getItem('locale') === null) {
  localStorage.setItem('locale', 'en')
}

const locale = localStorage.getItem('locale')
// use the require method provided by webpack
declare const require

// we use the webpack raw-loader to return the content as a string
// tslint:disable-next-line:no-var-requires
const translations = require(`raw-loader!./locale/messages.${locale}.xlf`).default

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    missingTranslation: MissingTranslationStrategy.Warning,
    providers: [
      { provide: TRANSLATIONS, useValue: translations },
      { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
    ],
  })
  .catch(err => {
    console.error(err)
  })
