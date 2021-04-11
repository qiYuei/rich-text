import Menu from '../core/menus/menu-core';
import { MenuProps } from '../core/menus/menuConfig';
export declare type DomElementSelector = Element;
export declare type MenuConfig = {
    menus?: string[];
    menusProps?: MenuProps[];
};
export declare type ConfigType = {
    container: DomElementSelector;
    menuConfig?: MenuConfig;
};
export declare type MenuItemCotor = {
    ele: HTMLElement;
    MenuInstance: Menu;
};
