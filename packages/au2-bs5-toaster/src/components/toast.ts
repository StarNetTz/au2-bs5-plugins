import { TOASTER_REMOVE_EA_CHANNEL } from './../toasterChannels';
import { IToast } from './../IToast';
import { IEventAggregator, IDisposable, bindable, containerless } from 'aurelia';
import { Toast as BSToast } from 'bootstrap';

@containerless
export class Toast {
    @bindable toast: IToast;
    evSubscription: IDisposable;
    toastRef: HTMLElement;

    constructor(
        @IEventAggregator private EventAggregator: IEventAggregator
    ) {
    }

    attached() {
        this.showToast();
        this.toastRef.addEventListener('hidden.bs.toast', () => {
            this.EventAggregator.publish(TOASTER_REMOVE_EA_CHANNEL, this.toast);
        })
    }

    private showToast() {
        let toast = new BSToast(this.toastRef);
        toast.show();
    }
}