import { MenuDeaultConfiguration, MenuConfiguration } from './menuConfig'
import { ConfigType, MenuItemCotor } from '../../types/index'
import { isEmpty } from '../../util'
import { createElement, on, off } from '../../util/dom'
import Editor from '../editor/edit-core'
import ToolTips from './components/tooltips/ToolTips'

import Constructor,{MenuListType} from './components/index'
import EventEmitter from '../../util/EventEmitter'

// 菜单逻辑

class Menu {
    public config: ConfigType
    public menuConfig: any
    public defaultMenuProps: any
    public barEle: HTMLElement | null

    public $Editor: Editor

    public MenuItemInstance: MenuListType

    public events: EventEmitter

    constructor(Editor: Editor, config: ConfigType) {
        // 这里可以配置相关东西
        this.$Editor = Editor
        this.config = config
        this.menuConfig = {}
        this.barEle = null
        this.MenuItemInstance = {}

        this.events = new EventEmitter()
    }

    init() {
        this.mergeMenuConfig()

        // 根据配置创建标题栏
        this.barEle = this.createMenuElement()

        //初始化toolbar

        // this.createToolbarElement()

        // 菜单点击
        this.events.on('click', (mode:string) => {
            const instance = this.MenuItemInstance[mode]
            if (!instance) return
            const instanceGroup = Object.values(this.MenuItemInstance)

            // const  range =  this.$Editor.selection.getRange()  // 获取选中区域

 
            for (let menuInstance of instanceGroup) {
                // 原本选中,再点击 要取消active
                if (menuInstance === instance&&(!menuInstance.active)) {
                    menuInstance.addClass(menuInstance.el, 'active')
                    menuInstance.active = true
                } else {
                    menuInstance.removeClass(menuInstance.el, 'active')
                    menuInstance.active = false
                }
            }
        })

        return this.barEle
    }

    // 合并菜单配置
    mergeMenuConfig(): void {
        const { menuConfig = {} } = this.config
        // 长度是0则直接读取默认值
        if (isEmpty(menuConfig)) {
            this.menuConfig.menu = MenuConfiguration
            this.menuConfig.menuProps = { ...MenuDeaultConfiguration }
        } else {
            const { menus = MenuConfiguration, menusProps = MenuDeaultConfiguration } = menuConfig
            const menu = []
            const props = {}

            for (let item of menus) {
                menu.push(item)
                const prop = menusProps[item] || MenuDeaultConfiguration[item]
                if (isEmpty(prop)) {
                    throw new Error(`菜单配置${item}没有相对于的Props,请在menusProps配置`)
                }
                props[item] = prop
            }
            this.menuConfig.menu = menu
            this.menuConfig.menuProps = props
        }
    }

    createMenuElement(): HTMLElement {
        const { menu, menuProps } = this.menuConfig

        const menuItemFragment = document.createDocumentFragment()

        const toolbarMenu = (item: string, { icon, size, tips }:MenuListType, index: number) => {
            const dom = createElement(`<div class="editor-toolbar-menu flex-j-a-c" data-src="${index}">
             <i class="${icon}" style="font-size:${size};"></i>
         </div>
       `)

            let MenuInstances = new Constructor[item](dom, this,this.$Editor)

            this.MenuItemInstance[item] = MenuInstances

            menuItemFragment.appendChild(dom)
        }

        menu.map((item: string, index: number) => {
            return toolbarMenu(item, menuProps[item], index)
        })

        const barWrapper = function (): HTMLElement {
            const wrapper = createElement(`<div class="editor-toolbar-wrapper"></div>`)

            wrapper.appendChild(menuItemFragment)

            return wrapper
        }
        return barWrapper()
    }

    // 生成tooltips
    createToolbarElement() {
        const toolElement = createElement(`
          <div class="editor-tips-wrapper">
          
          </div>
        `)

        new ToolTips(this.$Editor, toolElement)
    }
}

export default Menu
