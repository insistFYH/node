const fs = require('fs')
fs.readFile('../file/成绩.txt', 'utf-8', function(err, result) {
    if (err) {
        return console.log('读取成绩失败' + err.message)
    }
    const dataArr = result.split(' ')
        // console.log(dataArr)
    const newArr = []
    dataArr.forEach(item => {
            newArr.push(item.replace('=', ':'))
        })
        // console.log(newArr)
    const dataStr = newArr.join('\r\n')
        // console.log(dataStr)
    fs.writeFile('../file/newScore.txt', dataStr, 'utf-8', function(err) {
        if (err) {
            return console.log('成绩写入错误' + err.message)
        }
        console.log('成绩写入成功')
    })
})