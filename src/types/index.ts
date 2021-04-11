import Menu from '../core/menus/menu-core'
import { MenuProps } from '../core/menus/menuConfig'

export type DomElementSelector = Element


export type MenuConfig = {
    menus?:string[],
    menusProps?:MenuProps[]
}

export type ConfigType = {
    container:DomElementSelector,
    menuConfig ?:MenuConfig
}


export type MenuItemCotor = {
    ele:HTMLElement,
    MenuInstance:Menu
}