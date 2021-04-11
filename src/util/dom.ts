type listener = (e: Event) => void
/**
 * 
 * @param str 兼容 div 和 <div>
 */
export function createElement(str:string): HTMLElement {
    // 目前是 如果不以 < 开头直接创建元素
    // 否则直接使用innnerHtml创建 
    if(str.startsWith("<")){
        const div = document.createElement("div")
        div.innerHTML = str
        const elems  = div.firstElementChild
        return elems as HTMLElement
    }else{
        return document.createElement(str)
    }
}

/**
 * 事件绑定
 */

export const on = (function() {
    if ( document.addEventListener) {
      return function(element:HTMLElement|Element, event:string, handler:listener) {
        if (element && event && handler) {
          element.addEventListener(event, handler, false);
        }
      };
    } else {
      return function(element:HTMLElement|Element, event:string, handler:listener) {
        if (element && event && handler) {
          // element.attachEvent('on' + event, handler);
        }
      };
    }
  })();
  

  export const off = (function() {
    if ( document.removeEventListener) {
      return function(element:HTMLElement|Element, event:string, handler:listener) {
        if (element && event) {
          element.removeEventListener(event, handler, false);
        }
      };
    } else {
      return function(element:HTMLElement|Element, event:string, handler:listener) {
        if (element && event) {
          // element.detachEvent('on' + event, handler);
        }
      };
    }
  })();
  

  export const once = function(el:HTMLElement|Element, event:string, fn:listener) {
    var listener = function() {
      if (fn) {
        fn.apply(this, arguments);
      }
      off(el, event, listener);
    };
    on(el, event, listener);
  };





export function hasClass(el:HTMLElement|Element, cls:string) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
};


export function addClass(el:HTMLElement|Element, cls:string) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
};


export function removeClass(el:HTMLElement|Element, cls:string) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ');
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
};

const trim = function(string:string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};