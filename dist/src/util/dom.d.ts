declare type listener = (e: Event) => void;
/**
 *
 * @param str 兼容 div 和 <div>
 */
export declare function createElement(str: string): HTMLElement;
/**
 * 事件绑定
 */
export declare const on: (element: HTMLElement | Element, event: string, handler: listener) => void;
export declare const off: (element: HTMLElement | Element, event: string, handler: listener) => void;
export declare const once: (el: HTMLElement | Element, event: string, fn: listener) => void;
export declare function hasClass(el: HTMLElement | Element, cls: string): boolean;
export declare function addClass(el: HTMLElement | Element, cls: string): void;
export declare function removeClass(el: HTMLElement | Element, cls: string): void;
export {};
