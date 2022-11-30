const path = require('path')
const fs = require('fs')
fs.readFile(path.join(__dirname, '../', 'file/1.txt'), 'utf-8', function(err, result) {
    if (err) {
        console.log('读取文件失败' + 'err.message')
    }
    console.log(__dirname)
    console.log('读取文件成功：' + result)
})
const fp = '/a/b/demo.html'
console.log(path.basename(fp))
console.log(path.basename(fp, '.html'))
console.log(path.extname(fp))