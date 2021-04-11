/**
 * 判断是否为空
 * @param target
 * @returns Boolean
 */
export function isEmpty(target: any): Boolean {
    if (!target) return true
    //  Array function
    if (target.length && target.length === 0) return true
    // object
    if (Object.keys(target).length === 0) return true

    return false
}

/**
 * 防抖
 * @param fn 
 * @param wait   
 */
export function debounce(fn: Function,wait: number){
   let timer :any= null;
   return function(...args:any){
      if(timer)  clearTimeout(timer)
     timer = setTimeout(()=>{
         fn.apply(this,args)
      },wait);
   }
}

/**
 * 节流
 * @param fn 
 * @param wait 
 * @returns 
 */

export function throttle(fn: Function,wait: number){
    let timer:any = null;
    let start = Date.now();
    return function(...args:any){
        let now = Date.now();
        let r = now - start - wait;
        clearTimeout(timer)
        if(r>0){
            timer = setTimeout(()=>{
                fn.apply(this,args)
            },r)
        }else{
            fn.apply(this,args)
        }
    }
}