# 富文本

ts编写，实现简单的加粗，添加标题，改变字体颜色等功能

## 开发模式下

```js
yarn dev
```

## script方式引入

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./index_6a28bdf7.css"></link>
    <script src="./index.min.js"></script>
</head>
<body>
    <div id="app"></div>
</body>
<script>
    const ele = document.getElementById('app')
    new Editor({
        container:ele,
    })
</script>
</html>
```

