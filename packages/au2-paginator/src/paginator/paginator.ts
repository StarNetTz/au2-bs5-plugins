import { bindable } from '@aurelia/runtime-html';
import { observable } from '@aurelia/runtime';

export class Paginator {
	@bindable totalItems = 0;
	@bindable currentPageIdx = 0;
	@bindable pageSize = 10;
	@bindable maxPageBlocks = 10;
	@bindable isDisabled = false;
	@bindable size: Size;
	@observable currentPage: number;

	private totalPages: number;
	private first: number;
	private prev: number;
	private next: number;
	private last: number;

	private isInitialized: boolean;
	private isFirstAndPrevDisabled: boolean;
	private isLastAndNextDisabled: boolean;

	constructor() {
		this.totalPages = 0;
		this.first = 0;
		this.prev = 0;
		this.next = 0;
		this.currentPage = 1;
	}

	onRefresh(val) {
		this.disableUnclickableButtons(val);
		this.currentPageIdx = val;
	}

	attached() {
		this.render();
		this.disableUnclickableButtons(this.currentPageIdx);
		this.isInitialized = true;
	}

	currentPageChanged(n, o) {

		if (!this.isInitialized)
			return;

		if ((n < 1) || (n > this.totalPages)) {
			setTimeout(() => { this.currentPage = o; }, 5);
			return;
		}

		if (n == this.currentPageIdx + 1)
			return;

		this.onRefresh(n - 1);
	}

	currentPageIdxChanged() {
		this.render();
	}

	totalItemsChanged(n, o) {
		this.render();
	}

	render() {
		this.calcTotalPages();
		this.calcPrevValue();
		this.calcNextValue();
		this.calcCurrentPage();
	}

	calcTotalPages() {
		let totalPages = Math.floor(this.totalItems / this.pageSize);

		if (this.totalItems % this.pageSize)
			totalPages++;

		this.totalPages = totalPages;
		this.last = totalPages - 1;
	}

	calcPrevValue() {
		if (this.currentPageIdx > 0)
			this.prev = this.currentPageIdx - 1;
		else
			this.prev = 0
	}

	calcNextValue() {
		if (this.currentPageIdx < (this.totalPages - 1))
			this.next = this.currentPageIdx + 1;
		else
			this.next = this.totalPages - 1;
	}

	calcCurrentPage() {
		let newVal = this.currentPageIdx + 1;
		if (this.currentPage != newVal)
			this.currentPage = newVal;
		if (this.currentPage != this.totalPages)
			this.isLastAndNextDisabled = false;
		if (this.currentPage == 1)
			this.isFirstAndPrevDisabled = true;
	}

	disableUnclickableButtons(val) {
		this.isFirstAndPrevDisabled = (val == this.first);
		this.isLastAndNextDisabled = (val == this.last);
	}
}

export enum Size {
	Small = 'sm',
	Large = 'lg',
}