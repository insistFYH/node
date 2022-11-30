const express = require('express')
const useRouter = express.Router()
useRouter.get('/user/add', (req, res) => {
    res.end('visit add success!')
})
module.exports = useRouter