import { createElement } from '../../util/dom'
import Editor from '../editor/edit-core'

// 编辑器为了方便继续输入/换行等原因 主动生成的空标签
export const EMPTY_P = '<p data-we-empty-p=""><br></p>'

class Selector {
    public $editor: Editor

    private $curSelect: Range | null | undefined = null
    constructor(editor: Editor) {
        this.$editor = editor
    }

    public getRange(): Range | null | undefined {
        return this.$curSelect
    }

    createEmptyElement() {
        const range = this.$editor.selection.getRange()
        if (range == null) return
        if (!this.isSelectionEmpty()) return

        // 获取当前光标的位置
        this.$editor.cmd.execute('insertHTML', '&#8203;')
        // 修改 offset 位置
        range.setEnd(range.endContainer, range.endOffset + 1)
        // 存储
        this.saveRange(range)
    }

    saveRange(range?: Range) {
        if (range) {
            // 保存已有选区
            this.$curSelect = range
            return
        }
        const contentBox = document.querySelector('.editor-contentBox')

        const selection = window.getSelection()

        if (selection.rangeCount === 0) {
            // 说明是没有选区
            return
        }

        const selRange = selection.getRangeAt(0)

        if (contentBox.contains(selRange.commonAncestorContainer)) {
            // 只保存可编辑区域的选区
            this.$curSelect = selRange
        }
    }

    /**
     * 获取选中区域的文字
     * @returns
     */
    public getSelectionText(): string {
        const range = this.$curSelect
        if (range) {
            return range.toString()
        } else {
            return ''
        }
    }

    /**
     * 选区是否为空（没有选择文字）
     */
    public isSelectionEmpty(): boolean {
        const range = this.$curSelect
        if (range && range.startContainer) {
            if (range.startContainer === range.endContainer) {
                if (range.startOffset === range.endOffset) {
                    return true
                }
            }
        }
        return false
    }

    /**
     * 恢复选区范围
     */
    public restoreSelection(): void {
        const selection = window.getSelection()
        const r = this.$curSelect
        if (selection && r) {
            selection.removeAllRanges()
            selection.addRange(r)
        }
    }

    public collapseRange(toStart: boolean = false): void {
        const range = this.$curSelect
        if (range) {
            range.collapse(toStart)
        }
    }

    /**
     * 新增空行
     */

    public newEmptyLine() {
        const editArea = document.querySelector('.editor-contentBox')

        const hasChild = Array.from(editArea.children).length === 0

        editArea.appendChild(createElement(EMPTY_P))

        // 获取他的最后一个元素
        const last = editArea.lastChild

        this.createRangeByElement(last)
    }

    public createRangeByElement(el: ChildNode) {
        const range = document.createRange()
        range.selectNode(el)

        this.saveRange(range)

        this.restoreSelection()
    }
}

export default Selector
