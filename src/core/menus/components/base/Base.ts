import { addClass, removeClass } from '../../../../util/dom'
import Editor from '../../../editor/edit-core'

class Base {
    removeClass(el: HTMLElement, className: string) {
        removeClass(el, className)
    }

    addClass(el: HTMLElement, className: string) {
        addClass(el, className)
    }
}

export default Base
