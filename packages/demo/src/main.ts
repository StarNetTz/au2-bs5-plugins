import { Toaster } from '@starnetbih/au2-toaster';
import { DataPaginator } from '@starnetbih/au2-paginator';
import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import { I18nConfiguration } from '@aurelia/i18n';
import Fetch from 'i18next-fetch-backend';

Aurelia
  .register(
    Toaster,
    DataPaginator,

    I18nConfiguration.customize((options) => {
      options.initOptions = {
        plugins: [Fetch],
        backend: {
          loadPath: '/locales/{{lng}}/{{ns}}.json'
        }
      };
    }),
  )
  .app(MyApp)
  .start();
