const express = require('express')
const app = express()
const mw = (req, res, next) => {
    console.log('first one middle ware')
    req.name = 'jack'
    next()
}
const mw2 = (req, res, next) => {
    console.log(`second one middle ware,passName is ${req.name}`)
    req.age = 20
    next()
}
app.get('/user/add', [mw, mw2], (req, res) => {
    console.log(`visit add success,passAge is ${req.age}`)
    res.send('wonderful')
})
app.get('/user/delete', (req, res) => {
    console.log('visit delete success')
    res.send('wonderful')
})
app.listen(80, (req, res) => {
    console.log('serve on at http:127.0.0.1')
})