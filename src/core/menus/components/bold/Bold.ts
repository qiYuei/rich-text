import { on } from '../../../../util/dom'
import Editor from '../../../editor/edit-core'
import Menu from '../../menu-core'
import Base from '../base/Base'

class Bold extends Base {
    public el: HTMLElement

    public MenuInstance: any

    public active: Boolean

    public $editor: Editor

    constructor(ele: HTMLElement, MenuInstance: Menu, editor: Editor) {
        super()
        this.el = ele
        this.active = false
        this.MenuInstance = MenuInstance
        this.$editor = editor
        this.bindClick()
    }

    bindClick() {
        on(this.el, 'click', (e: Event) => {
            e.stopPropagation()
            this.MenuInstance.events.emit('click', 'bold')
            this.clickHandler()
        })
    }

    clickHandler() {
        const selection = this.$editor.selection.getRange()

        const isEmpty = this.$editor.selection.isSelectionEmpty()

        

        if (isEmpty) {
            // this.$editor.cmd.execute('innerHtml','bold')
            this.$editor.selection.createEmptyElement()
        }
        


        // debugger;
        this.$editor.cmd.execute('bold')

        if (isEmpty) {
            // 需要将选区范围折叠起来
            this.$editor.selection.collapseRange()
            this.$editor.selection.restoreSelection()
        }
    }
}

export default Bold
