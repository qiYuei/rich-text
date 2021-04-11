import './src/style/style.css'

import Editor from './src/core/editor/edit-core'
// css
import './src/style/index.less'

const ele = document.querySelector('#app');

new Editor({
    container:ele,
})
