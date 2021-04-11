import Editor from '../../../editor/edit-core';
declare type toolConfig = {
    widht?: number;
    height?: number;
};
declare class ToolTips {
    EditorInstance: Editor;
    toolTipEle: HTMLElement;
    toolConfig: toolConfig;
    constructor(Editor: Editor, ele: HTMLElement, toolConfig?: toolConfig);
    initToolTips(): void;
}
export default ToolTips;
