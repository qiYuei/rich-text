import { throttle } from '../../../../util'
import { createElement, on, addClass } from '../../../../util/dom'
import Menu from '../../menu-core'
import Base from '../base/Base'
import DropList from '../dropList/DropList'

export type DropListItem = {
    el: HTMLElement
    value: string
}

class Title extends Base {
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
        this.dropListEle = null
        this.dropListInstance = null
        this.createDropList()

        this.bindEvents()
    }

    bindEvents() {
        
    }

    createDropList() {
        const dropWrap = createElement('<div class="editor-drop-wrap" style="display:none;"></div>')
        this.dropListEle = dropWrap

        const dropConf = {
            wrapEle: dropWrap,
            list: [
                {
                    el: createElement(
                        '<div class="editor-drop-wrap-item" data-index="0"><p>正文</p></div>'
                    ),
                    value: '<p>',
                },
                {
                    el: createElement(
                        '<div class="editor-drop-wrap-item" data-index="1"><h1>H1</h1></div>'
                    ),
                    value: '<h1>',
                },
                {
                    el: createElement(
                        '<div class="editor-drop-wrap-item" data-index="2"><h2>H2</h2></div>'
                    ),
                    value: '<h2>',
                },
                {
                    el: createElement(
                        '<div class="editor-drop-wrap-item" data-index="3"><h3>H3</h3></div>'
                    ),
                    value: '<h3>',
                },
                {
                    el: createElement(
                        '<div class="editor-drop-wrap-item" data-index="4"><h4>H4</h4></div>'
                    ),
                    value: '<h4>',
                },
            ],
            change: (value: string, item: DropListItem) => {
                
                this.MenuInstance.events.emit('click', 'title') // 给这个菜单添加active样式
                
                this.command(value,item)
            },
        }
        this.dropListInstance = new DropList(this.el,dropConf)
        this.el.appendChild(dropWrap)
    }

    command(value: string, item: DropListItem){
         
        const  editor = this.MenuInstance.$Editor

        const isEmpty = editor.selection.isSelectionEmpty()

        

        if (isEmpty) {
            // this.$editor.cmd.execute('innerHtml','bold')
            editor.selection.createEmptyElement()
        }
        
        editor.cmd.execute('formatBlock', value)

        if (isEmpty) {
            // 需要将选区范围折叠起来
            editor.selection.collapseRange()
            editor.selection.restoreSelection()
        }
    }
    
}

export default Title
