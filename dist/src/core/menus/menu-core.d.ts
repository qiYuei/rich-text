import { ConfigType } from '../../types/index';
import Editor from '../editor/edit-core';
import { MenuListType } from './components/index';
import EventEmitter from '../../util/EventEmitter';
declare class Menu {
    config: ConfigType;
    menuConfig: any;
    defaultMenuProps: any;
    barEle: HTMLElement | null;
    $Editor: Editor;
    MenuItemInstance: MenuListType;
    events: EventEmitter;
    constructor(Editor: Editor, config: ConfigType);
    init(): HTMLElement;
    mergeMenuConfig(): void;
    createMenuElement(): HTMLElement;
    createToolbarElement(): void;
}
export default Menu;
