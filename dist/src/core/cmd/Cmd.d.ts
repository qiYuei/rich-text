import Editor from '../editor/edit-core';
declare class Cmd {
    $editor: Editor;
    constructor(editor: Editor);
    execute(name: string, value?: string): void;
    createElement(name: string, tag: string): void;
    insertHTML(value: string): void;
    execCommand(command: string, value?: string): void;
    queryCommandSupported(name: string): boolean;
}
export default Cmd;
