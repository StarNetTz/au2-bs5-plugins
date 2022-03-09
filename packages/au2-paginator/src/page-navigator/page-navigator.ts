import { bindable, observable } from '@aurelia/runtime-html';

export class PageNavigator {
	@bindable totalItems = 0;
	@bindable currentPageIdx = 0;
	@bindable pageSize = 10;
	@bindable maxPageBlocks = 10;
	@bindable isDisabled = false;
  
	pages: any;
  
	startIdx: number;
	endIdx: number;
  
	totalPages: number;

	private first: number;
	private prev: number;
	private next: number;
	private last: number;

	private isInitialized: boolean;
    
	constructor() {
	  this.pages = [];
	  this.startIdx = 0;
	  this.endIdx = 0;
	  this.totalPages = 0;
	  this.prev = 0;
	  this.next = 0;
	  this.first = 0;
	  this.last = 0;
	  this.isInitialized = false;
	}
  

	onRefresh(val) {
		this.currentPageIdx = val;
		console.log(this.currentPageIdx);
	}
  

	attached() {
	  this.render();
	  this.isInitialized = true;
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
	  this.calculateStartAndEnd();
	  this.pages = [];
	  for (let i = this.startIdx; i <= this.endIdx; i++) {
		this.pages.push({ text: `${i + 1}`, value: i });
	  }
	}
  
	calcTotalPages() {
	  let totalPages = Math.floor(this.totalItems / this.pageSize);
	  if (this.totalItems % this.pageSize) {
		totalPages++;
	  };
	  this.totalPages = totalPages;
	  this.last = totalPages - 1;
	}
  
	calcPrevValue() {
	  if (this.currentPageIdx > 0) {
		this.prev = this.currentPageIdx - 1;
	  } else {
		(this.prev = 0)
	  }
  
	}
  
	calcNextValue() {
	  if (this.currentPageIdx < (this.totalPages - 1)) {
		this.next = this.currentPageIdx + 1;
	  } else {
		(this.next = this.totalPages - 1)
	  }
  
	}
  
	calculateStartAndEnd() {
	  if (this.isLeftInterval()) {
		this.startIdx = 0;
  
	  } else if (this.isRightInterval()) {
		this.startIdx = (this.totalPages - this.maxPageBlocks);
		if (this.startIdx < 0)
		  this.startIdx = 0;
	  } else {
		let half = Math.floor(this.maxPageBlocks / 2);
		this.startIdx = this.currentPageIdx - half;
	  }
  
	  if (this.totalPages <= this.maxPageBlocks)
		this.endIdx = this.totalPages - 1;
	  else
		this.endIdx = this.startIdx + (this.maxPageBlocks - 1);
	}
  
	  isLeftInterval() {
		let half = this.maxPageBlocks / 2;
		return (this.currentPageIdx < half);
	  }
  
	  isRightInterval() {
		let half = this.maxPageBlocks / 2;
		let rightIntervalStartIdx = (this.totalPages - 1) - half;
		return (this.currentPageIdx > rightIntervalStartIdx);
	  }
}