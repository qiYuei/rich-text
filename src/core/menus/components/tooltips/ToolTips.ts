import Editor from '../../../editor/edit-core'


type toolConfig = {
   widht ?: number,
   height ?: number
}

class ToolTips {
    
    public EditorInstance: Editor
    
    public toolTipEle:HTMLElement

    public toolConfig:toolConfig

    constructor(Editor:Editor,ele:HTMLElement,toolConfig?:toolConfig){
        
        this.EditorInstance = Editor
        
        this.toolTipEle = ele
        
        this.toolConfig = toolConfig

        this.initToolTips()
    }
    
    initToolTips(){
       const { widht,height } = this.toolConfig 

    }

}

export default ToolTips