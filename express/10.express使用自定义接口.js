const express = require('express')
const useRouter = require('./09.express写接口')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// 必须在配置 cors 中间件之前，配置 JSONP 的接口
app.get('/api/jsonp', (req, res) => {
    // TODO: 定义 JSONP 接口具体的实现过程
    // 1. 得到函数的名称
    const funcName = req.query.callback
        // 2. 定义要发送到客户端的数据对象
    const data = { name: 'zs', age: 22 }
        // 3. 拼接出一个函数的调用
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
        // 4. 把拼接的字符串，响应给客户端
    res.send(scriptStr)
})

app.use(cors())
app.use('/api', useRouter)

app.listen(80, (req, res) => {
    console.log('server running at http:127.0.0.1')
})