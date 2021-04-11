import { throttle } from '../../../../util'
import { on, addClass, removeClass } from '../../../../util/dom'

type DropListData = {
    el: HTMLElement
    value: string
}

export type DropListConf = {
    wrapEle: HTMLElement
    list: Array<DropListData>
    change?: Function
}

class DropList {
    public wrapEle: HTMLElement

    public listData: Array<DropListData>

    public event: any

    public activeIndex: number

    public el :HTMLElement

    constructor(ele:HTMLElement,conf: DropListConf) {
        this.el = ele
        this.wrapEle = conf.wrapEle
        this.listData = conf.list
        this.event = conf.change
        this.activeIndex = null
        this.init()

        this.bindEvents()
    }

    init() {
        let fragment = document.createDocumentFragment()
        for (let item of this.listData) {
            fragment.appendChild(item.el)
        }
        this.wrapEle.appendChild(fragment)
    }

    bindEvents() {
        this.listData.forEach((dom, index) => {
            on(dom.el, 'click', (e: Event) => {
                e.stopPropagation()
                this.event(dom.value, dom)
                this.activeIndex = index
                this.changeClassStatus()
            })
        })

       
        const mouseleaveFn = throttle((e: Event) => {
            e.stopPropagation()
            this.wrapEle.style.display = 'none'
        }, 50)
        on(this.el, 'click', (e: Event) => {
            e.stopPropagation()
            // this.MenuInstance.events.emit('click', 'title')
        })

        on(this.el, 'click', (e: Event) => {
            e.stopPropagation()
            this.wrapEle.style.display = 'block'
        })

        on(this.el, 'mouseleave', mouseleaveFn)

        on(this.wrapEle, 'mouseleave', (e: Event) => {
            e.stopPropagation()
            this.wrapEle.style.display = 'none'
        })

    }

    changeClassStatus() {
        this.listData.forEach((dom, index) => {
            if (this.activeIndex === index) {
                addClass(dom.el,'active')
            } else {
                removeClass(dom.el,'active')
            }
        })
    }
}

export default DropList
