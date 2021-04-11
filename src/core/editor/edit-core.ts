import { ConfigType } from '../../types/index'
import { throttle } from '../../util'
import { createElement, on } from '../../util/dom'
import Cmd from '../cmd/Cmd'

import Menu from '../menus/menu-core'
import Selector from '../selector/Selector'
class Editor {
    public menus: Menu
    public config: ConfigType
    public toolbarEle: HTMLElement | null
    public menusEle: HTMLElement
    public selection: Selector

    public cmd:Cmd
    constructor(config: ConfigType) {
        // 初始化 编辑器区域

        // 初始化 菜单栏
        this.config = config
        this.menus = new Menu(this, this.config)
        this.init()

        this.bindEvents()
    }

    init() {
        this.initDom()
        this.toolbarEle = this.menus.init()
        this.mountToolbar()

        this.selection = new Selector(this)
        this.cmd = new Cmd(this)

        // 这里需要默认让编辑区域选中缩影需要新增一行

        this.selection.newEmptyLine()
        
    }

    initDom() {
        const { container } = this.config
        const div = createElement(
            `<div class="editor-container">
        <div class="editor-bar"></div>
        <div class="editor-contentWrap">
        <div class="editor-contentBox" contenteditable="true"></div>
        </div>
        </div>`
        )
        this.menusEle = div
        container.appendChild(div)
    }

    mountToolbar() {
        const ele = document.querySelector('.editor-bar')
        ele.appendChild(this.toolbarEle)
    }

    bindEvents() {
        const contentBox = document.querySelector('.editor-contentBox')
        // const fn = throttle(e => {
        //     // 保存下之前已经选择的东西
        //     this.selection.saveRange()
        // }, 100)

        on(contentBox, 'mouseleave', e => {
            // 保存下之前已经选择的东西
            this.selection.saveRange()
        })
    }
}

export default Editor
