const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    const url = req.url
    console.log(url)
    let content = '<h>404 NOT FOUND!</h>'
    if (url === '/' || url === '/index.html') {
        content = '<h>这是首页</h>'
    } else if (url === '/detail.html') {
        content = '<h>这是详情页</h>'
    }
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end(content)
})
server.listen(80, () => {
    console.log('http://127.0.0.1:80监听中')
})