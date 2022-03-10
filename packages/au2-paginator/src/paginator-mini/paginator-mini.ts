import { Paginator, Size } from "../paginator/paginator";

export class PaginatorMini extends Paginator {
    constructor() {
        super();
        this.size = Size.Small;
    }
}