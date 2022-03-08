import { Toaster } from '@starnetbih/au2-toaster';
import Aurelia from 'aurelia';
import { MyApp } from './my-app';

Aurelia
  .register(Toaster)
  .app(MyApp)
  .start();
