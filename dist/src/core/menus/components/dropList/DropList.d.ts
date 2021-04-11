declare type DropListData = {
    el: HTMLElement;
    value: string;
};
export declare type DropListConf = {
    wrapEle: HTMLElement;
    list: Array<DropListData>;
    change?: Function;
};
declare class DropList {
    wrapEle: HTMLElement;
    listData: Array<DropListData>;
    event: any;
    activeIndex: number;
    el: HTMLElement;
    constructor(ele: HTMLElement, conf: DropListConf);
    init(): void;
    bindEvents(): void;
    changeClassStatus(): void;
}
export default DropList;
