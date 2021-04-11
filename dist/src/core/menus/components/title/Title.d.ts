import Menu from '../../menu-core';
import Base from '../base/Base';
import DropList from '../dropList/DropList';
export declare type DropListItem = {
    el: HTMLElement;
    value: string;
};
declare class Title extends Base {
    el: HTMLElement;
    MenuInstance: Menu;
    active: Boolean;
    dropListEle: HTMLElement;
    dropListInstance: DropList;
    constructor(ele: HTMLElement, MenuInstance: Menu);
    bindEvents(): void;
    createDropList(): void;
    command(value: string, item: DropListItem): void;
}
export default Title;
