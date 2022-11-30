const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.post('/user/add', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})


app.listen(80, (req, res) => {
    console.log('server running at http:127.0.0.1')
})