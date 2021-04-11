class EventEmitter{
  public listeners:{
    [key: string]: Function[]
  }
  constructor(){
    this.listeners = {}
  }

  on(event:string, cb:Function){
    const listeners = this.listeners
    if (listeners[event] instanceof Array) {
      if (listeners[event].indexOf(cb) === -1) {
        listeners[event].push(cb)
      }
    } else {
      listeners[event] = [].concat(cb)
    }
  }
  

  emit(event:string,...args: string[]){
    // var args = Array.prototype.slice.call(arguments)
    // args.shift()
    this.listeners[event] && this.listeners[event].forEach(cb => {
      cb.apply(null, args)
    })
  }

  removeListener(event:string, listener:Function){
    var listeners = this.listeners
    var arr = listeners[event] || []
    var i = arr.indexOf(listener)
    if (i >= 0) {
      listeners[event].splice(i, 1)
    }
  }

  once(event:string, listener:Function) {
    var self = this
  
    function fn() {
      var args = Array.prototype.slice.call(arguments)
      listener.apply(null, args)
  
      // 异步清除
      Promise.resolve().then(() => {
        self.removeListener(event, fn)
      })
    }
    this.on(event, fn)
  }

  removeAllListener(event:string) {
    this.listeners[event] = []
  }

}
  export default EventEmitter