/**
 * 判断是否为空
 * @param target
 * @returns Boolean
 */
export declare function isEmpty(target: any): Boolean;
/**
 * 防抖
 * @param fn
 * @param wait
 */
export declare function debounce(fn: Function, wait: number): (...args: any) => void;
/**
 * 节流
 * @param fn
 * @param wait
 * @returns
 */
export declare function throttle(fn: Function, wait: number): (...args: any) => void;
