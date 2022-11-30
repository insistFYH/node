const fs = require('fs')
fs.readFile('../file/1.txt', 'utf8', function(err, result) {
    if (err) {
        return console.log('文件读取失败' + err.message)
    }
    console.log('文件的内容为' + result)

})

fs.writeFile('../file/2.txt', 'i am jack,and you', 'utf8', function(err) {
    if (err) {
        return console.log('文件写入失败' + 'err.message')
    }
    console.log('写入文件成功')
})