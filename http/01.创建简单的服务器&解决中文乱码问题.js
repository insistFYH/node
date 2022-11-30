const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    console.log(req.url)
    console.log(req.method)

    const str = `请求的url为${req.url},请求的方法为${req.method}`
        //防止中文乱码
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end(str)
})
server.listen(80, () => {
    console.log('http://127.0.0.1:80正在监听中')
})