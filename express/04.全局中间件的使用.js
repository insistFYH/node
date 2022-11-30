const express = require('express')
const app = express()
app.use((req, res, next) => {
    console.log('first one middle ware')
    req.name = 'jack'
    next()
})
const mw2 = (req, res, next) => {
    console.log(`second one middle ware,passName is ${req.name}`)
    req.age = 20
    next()
}
app.use(mw2)
app.get('/user/add', (req, res) => {
    console.log(`visit add success,passAge is ${req.age}`)
    res.send('wonderful')
})
app.listen(80, (req, res) => {
    console.log('serve on at http:127.0.0.1')
})