import { Toaster } from '@starnetbih/au2-toaster';
import * as components from '@starnetbih/au2-paginator';
import Aurelia  from 'aurelia';
import { MyApp } from './my-app';

Aurelia
  .register(
    Toaster,
    components
  )
  .app(MyApp).start();
