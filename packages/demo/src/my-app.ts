import { ToastType, TOASTER_PUBLISH_EA_CHANNEL } from '@starnetbih/au2-toaster';

import { IEventAggregator } from "aurelia";

export class MyApp {
  public message = 'Hello World!';
  totalItems: number = 1220;
  currentPageIdx: number = 0;

  constructor(@IEventAggregator private ea: IEventAggregator) { }

  attached() {
    this.ea.publish(TOASTER_PUBLISH_EA_CHANNEL, { type: ToastType.INFO, title: "TITLE", message: "MESSAGE" });
  }
}
