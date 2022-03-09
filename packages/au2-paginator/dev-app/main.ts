import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import * as Paginator from "../src/index";

Aurelia
  // Register all exports of the plugin
  .register(Paginator)
  .app(MyApp)
  .start();
