const mysql = require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db'
})

// 查询所有数据
// const sqlStr = 'select * from users'
// db.query(sqlStr, (err, results) => {
//         if (err) return console.log(err.message)
//         console.log(results)
//     })
// 插入一条数据
// const user = { username: 'jack', password: '123' }
// const sqlStr2 = 'insert into users (username,password) values(?,?)'
// db.query(sqlStr2, [user.username, user.password], (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1) console.log('插入数据成功')
// })
// 插入数据简化写法
// const user = { username: 'mike', password: '123' }
// const sqlStr2 = 'insert into users set ?'
// db.query(sqlStr2, user, (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1) console.log('插入数据成功')
// })
//更新数据
// const user = { id: 5, username: 'mikes', password: '111' }
// const sqlStr2 = 'update users set username=?,password=? where id=?'
// db.query(sqlStr2, [user.username, user.password, user.id], (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1) console.log('更新数据成功')
// })
//更新数据简化写法
// const user = { id: 5, username: 'mikes', password: '111222' }
// const sqlStr2 = 'update users set ? where id=?'
// db.query(sqlStr2, [user, user.id], (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1) console.log('更新数据成功')
// })
//删除id为5的用户
// const sqlStr2 = 'delete from users where id=?'
// db.query(sqlStr2, 5, (err, results) => {
//     if (err) return console.log(err.message)
//     if (results.affectedRows === 1) console.log('删除数据成功')
// })
//标记删除
const sqlStr2 = 'update users set status=? where id=?'
db.query(sqlStr2, [1, 3], (err, results) => {
    if (err) return console.log(err.message)
    if (results.affectedRows === 1) console.log('标记删除成功')
})