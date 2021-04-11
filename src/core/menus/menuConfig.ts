export const MenuConfiguration = ['title', 'bold', 'fontColor']

export type MenuProps = {
    icon: string
    size: string
    tips: string
}

// const MenuDeaultConfiguration = new Map<String, MenuProps>([
//     ['title', { icon: '', size: '14px', tips: '标题' }],
//     ['bold', { icon: '', size: '14px', tips: '加粗' }],
//     ['fontSize', { icon: '', size: '14px', tips: '字体大小' }],
//     ['fontColor', { icon: '', size: '14px', tips: '字体颜色' }],
// ])



export const MenuDeaultConfiguration = {
    title: { icon: 'icon-header', size: '14px', tips: '标题' },
    bold: { icon: 'icon-bold', size: '14px', tips: '加粗' },
    fontColor: { icon: 'icon-pencil2', size: '14px', tips: '字体颜色' },
    // fontColor: { icon: 'icon-pencil2', size: '14px', tips: '字体颜色' },
}
