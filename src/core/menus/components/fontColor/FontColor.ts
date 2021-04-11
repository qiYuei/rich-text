import { throttle } from '../../../../util'
import { createElement, on } from '../../../../util/dom'
import Menu from '../../menu-core'
import Base from '../base/Base'
import DropList from '../dropList/DropList'
import { DropListItem } from '../title/Title'

const COLORS = ['#66CCCC', '#CCFF66', '#FF99CC']

class FontColor extends Base {
    public el: HTMLElement

    public MenuInstance: Menu

    public active: Boolean

    public dropListEle: HTMLElement

    public dropListInstance: DropList

    constructor(ele: HTMLElement, MenuInstance: Menu) {
        super()
        this.el = ele
        this.active = false
        this.MenuInstance = MenuInstance
        this.createFontSizeDropList()
    }

    createFontSizeDropList() {
        const dropWrap = createElement('<div class="editor-drop-wrap" style="display:none;"></div>')
        this.dropListEle = dropWrap

        const dropConf = {
            wrapEle: dropWrap,
            list: [
                {
                    el: createElement(
                        '<div  data-index="0" style="background-color:#66CCCC;" class="editor-drop-wrap-item-color"></div>'
                    ),
                    value: '#66CCCC',
                },
                {
                    el: createElement(
                        '<div  data-index="1" style="background-color:#CCFF66;"  class="editor-drop-wrap-item-color" ></div>'
                    ),
                    value: '#CCFF66',
                },
                {
                    el: createElement(
                        '<div  data-index="2" style="background-color:#FF99CC;"  class="editor-drop-wrap-item-color"></div>'
                    ),
                    value: '#FF99CC',
                },
            ],
            change: (value: string, item: DropListItem) => {
                this.MenuInstance.events.emit('click', 'fontColor') // 给这个菜单添加active样式

                this.command(value, item)
            },
        }
        this.dropListInstance = new DropList(this.el, dropConf)
        this.el.appendChild(dropWrap)
    }

    command(value: string, item: DropListItem) {

      const  editor = this.MenuInstance.$Editor

        const isEmpty = editor.selection.isSelectionEmpty()

        

        if (isEmpty) {
            // this.$editor.cmd.execute('innerHtml','bold')
            editor.selection.createEmptyElement()
        }
        
        editor.cmd.execute('foreColor', value)

        if (isEmpty) {
            // 需要将选区范围折叠起来
            editor.selection.collapseRange()
            editor.selection.restoreSelection()
        }
    }
}

export default FontColor
