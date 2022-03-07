import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import { Toaster } from '@starnetbih/au2-bs5-toaster';

Aurelia
  .register(Toaster)
  .app(MyApp)
  .start();
