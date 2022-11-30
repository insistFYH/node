const express = require('express')
const useRouter = require('./03.模块路由')
const app = express()
app.use('/api', useRouter)
app.listen(80, () => {
    console.log('serve on at http://127.0.0.1')
})