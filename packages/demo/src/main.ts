import { Toaster } from '@starnetbih/au2-toaster';
import { Paginator } from '@starnetbih/au2-paginator';
import Aurelia from 'aurelia';
import { MyApp } from './my-app';

Aurelia
  .register(
    Toaster,
    Paginator
  )
  .app(MyApp)
  .start();
