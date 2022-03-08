import { TOASTER_PUBLISH_EA_CHANNEL, TOASTER_REMOVE_EA_CHANNEL } from './toasterChannels';
import { containerless, IDisposable, IEventAggregator } from "aurelia";
import { IToast } from './IToast';

@containerless
export class Toaster {
	showToastSubscription: IDisposable;
	removeToastSubscription: IDisposable;
	toasts: Array<IToast>;

	constructor(
		@IEventAggregator private EventAggregator: IEventAggregator
	) {
		this.toasts = [];
	}

	attached() {
		this.showToastSubscription = this.EventAggregator.subscribe(TOASTER_PUBLISH_EA_CHANNEL, (tst: IToast) => {
			this.toasts.push(tst);
		});
		this.removeToastSubscription = this.EventAggregator.subscribe(TOASTER_REMOVE_EA_CHANNEL, (tst: IToast) => {
			let idx = this.toasts.indexOf(tst);
			this.toasts.splice(idx, 1);
		})
	}

	dispose() {
		this.showToastSubscription.dispose();
		this.removeToastSubscription.dispose();
	}
}