const express = require('express')
const app = express()
app.get('/user/:name', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    const str = JSON.stringify(req.params)
    res.end(`params参数为${str}`)
})

app.post('/user', (req, res) => {
    console.log(req.query)
    res.end(`post请求参数为${req.query}`)
})
app.listen(80, () => {
    console.log('serve on at http://127.0.0.1')
})