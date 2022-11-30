const express = require('express')
const useRouter = express.Router()
useRouter.get('/user/get', (req, res) => {
    const url = req.url
    res.send({
        status: 0,
        msg: 'get请求成功',
        data: url
    })
})
useRouter.post('/user/post', (req, res) => {
    const body = req.body
    console.log(body)
    res.send({
        status: 0,
        msg: 'post请求成功',
        data: body
    })
})
useRouter.delete('/user/delete', (req, res) => {
    res.send({
        status: 0,
        msg: 'post请求成功'
    })
})
module.exports = useRouter