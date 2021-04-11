import { createElement } from '../../util/dom'
import Editor from '../editor/edit-core'

const map = new Map([['bold', 'b']])

class Cmd {
    public $editor: Editor
    constructor(editor: Editor) {
        this.$editor = editor
    }

    public execute(name: string, value?: string) {
        // const selection = this.$editor.selection.getRange()

        const isSelectedEmpty = this.$editor.selection.isSelectionEmpty()
       

        // 要先恢复选中
        this.$editor.selection.restoreSelection()
      
        // if (isSelectedEmpty) {
        //     // 是空的话 就清除所有选区
        //     // const selection = window.getSelection()
        //     // selection.removeAllRanges()
        // }
        // 这里如果没有选中的话 那就要新增一个 这个类型的元素 比如加粗就是<b>

        switch (name) {
            case 'insertHTML':
                this.insertHTML(value)
                break
            case 'innerElement':
                this.createElement(name, value)
                break
            default:
                this.execCommand(name, value)
                break
        }

        this.$editor.selection.saveRange()

        this.$editor.selection.restoreSelection()
    }

    createElement(name: string, tag: string) {
        const crateTag = map.get(tag)
        // 获取当前光标的位置
        const editor = this.$editor
        const range = editor.selection.getRange()
        if (range == null) return

        if (range.insertNode) {
            range.deleteContents()
            const ele = createElement(`<${crateTag}>&#8203;</${crateTag}>`)
            range.insertNode(ele)
            // 移动光标位置
            range.setStart(ele.childNodes[0], 1)
        }
    }

    insertHTML(value: string) {
        // console.log(this.queryCommandSupported('insertHTML'), window.getSelection())

        document.execCommand('insertHTML', false, value)
    }

    execCommand(command: string, value?: string) {

       const t =  document.execCommand(command, false, value)
       console.log('执行',command,'指令',t)
    }

    public queryCommandSupported(name: string): boolean {
        return document.queryCommandSupported(name)
    }
}

export default Cmd
