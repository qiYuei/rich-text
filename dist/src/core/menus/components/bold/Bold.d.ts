import Editor from '../../../editor/edit-core';
import Menu from '../../menu-core';
import Base from '../base/Base';
declare class Bold extends Base {
    el: HTMLElement;
    MenuInstance: any;
    active: Boolean;
    $editor: Editor;
    constructor(ele: HTMLElement, MenuInstance: Menu, editor: Editor);
    bindClick(): void;
    clickHandler(): void;
}
export default Bold;
