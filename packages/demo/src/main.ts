import { Toaster } from '@au2-bootstrap5/toaster';
import Aurelia from 'aurelia';
import { MyApp } from './my-app';

Aurelia
  .register(Toaster)
  .app(MyApp)
  .start();
