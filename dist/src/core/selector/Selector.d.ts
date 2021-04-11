import Editor from '../editor/edit-core';
export declare const EMPTY_P = "<p data-we-empty-p=\"\"><br></p>";
declare class Selector {
    $editor: Editor;
    private $curSelect;
    constructor(editor: Editor);
    getRange(): Range | null | undefined;
    createEmptyElement(): void;
    saveRange(range?: Range): void;
    /**
     * 获取选中区域的文字
     * @returns
     */
    getSelectionText(): string;
    /**
     * 选区是否为空（没有选择文字）
     */
    isSelectionEmpty(): boolean;
    /**
     * 恢复选区范围
     */
    restoreSelection(): void;
    collapseRange(toStart?: boolean): void;
    /**
     * 新增空行
     */
    newEmptyLine(): void;
    createRangeByElement(el: ChildNode): void;
}
export default Selector;
