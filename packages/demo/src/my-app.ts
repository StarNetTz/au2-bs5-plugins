import { ToastType } from './../../au2-bs5-toaster/src/toastType';
import { TOASTER_PUBLISH_EA_CHANNEL } from './../../au2-bs5-toaster/src/toasterChannels';
import { IEventAggregator } from "aurelia";

export class MyApp {
  public message = 'Hello World!';

  constructor(@IEventAggregator private ea: IEventAggregator) { }

  attached() {
    this.ea.publish(TOASTER_PUBLISH_EA_CHANNEL, { type: ToastType.INFO, title: "TITLE", message: "MESSAGE" });
  }
}
