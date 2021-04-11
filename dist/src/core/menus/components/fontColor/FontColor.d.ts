import Menu from '../../menu-core';
import Base from '../base/Base';
import DropList from '../dropList/DropList';
import { DropListItem } from '../title/Title';
declare class FontColor extends Base {
    el: HTMLElement;
    MenuInstance: Menu;
    active: Boolean;
    dropListEle: HTMLElement;
    dropListInstance: DropList;
    constructor(ele: HTMLElement, MenuInstance: Menu);
    createFontSizeDropList(): void;
    command(value: string, item: DropListItem): void;
}
export default FontColor;
