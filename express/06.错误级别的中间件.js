const express = require('express')
const app = express()

app.get('/user/add', (req, res) => {
    throw new Error('服务器出现错误')
    res.send('visit success')
})

app.use((err, req, res, next) => {
    console.log('出现错误了' + err.message)
    res.send('Error' + err.message)
})
app.listen(80, (req, res) => {
    console.log('serve on at http:127.0.0.1')
})