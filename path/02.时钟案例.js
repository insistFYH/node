// 导入模块
const fs = require('fs')
const path = require('path')

//定义正则表达式，分别匹配 <style></style> 和 <script></script> 标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

//读取文件
fs.readFile(path.join(__dirname, '../', 'file/index.html'), 'utf8', function(err, dataStr) {
    if (err) return console.log('读取HTML文件失败！' + err.message)
        //调用对应的三个方法，分别拆解出 css, js, html 文件
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

//处理 css 样式的方法
function resolveCSS(htmlStr) {
    const r1 = regStyle.exec(htmlStr)
        //替换操作
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')
        //将提取的样式，写入到 clock 目录中 index.css 的文件里面
    fs.writeFile(path.join(__dirname, '../', 'clock/index.css'), newCSS, function(err) {
        if (err) return console.log('写入 CSS 样式失败！' + err.message)
        console.log('写入样式文件成功！')
    })
}

//处理 js 脚本的方法
function resolveJS(htmlStr) {
    const r2 = regScript.exec(htmlStr)
    const newJS = r2[0].replace('<script>', '').replace('</script>', '')
        // 将处理的结果，写入到 clock 目录中的 index.js 文件里面
    fs.writeFile(path.join(__dirname, '../', 'clock/index.js'), newJS, function(err) {
        if (err) return console.log('写入 JavaScript 脚本失败！' + err.message)
        console.log('写入 JS 脚本成功！')
    })
}

//处理 HTML 结构的方法
function resolveHTML(htmlStr) {
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />').replace(regScript, '<script src="./index.js"></script>')
        // 5.3 写入 index.html 这个文件
    fs.writeFile(path.join(__dirname, '../', 'clock/index.html'), newHTML, function(err) {
        if (err) return console.log('写入 HTML 文件失败！' + err.message)
        console.log('写入 HTML 页面成功！')
    })
}