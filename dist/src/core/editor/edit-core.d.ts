import { ConfigType } from '../../types/index';
import Cmd from '../cmd/Cmd';
import Menu from '../menus/menu-core';
import Selector from '../selector/Selector';
declare class Editor {
    menus: Menu;
    config: ConfigType;
    toolbarEle: HTMLElement | null;
    menusEle: HTMLElement;
    selection: Selector;
    cmd: Cmd;
    constructor(config: ConfigType);
    init(): void;
    initDom(): void;
    mountToolbar(): void;
    bindEvents(): void;
}
export default Editor;
