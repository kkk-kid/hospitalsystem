let db = require('../db/index')

exports.all = (req, res) => {        //获取aitravellog表全部数据
  var sql = 'select * from aitravellog'
  db.query(sql, (err, data) => {
      if(err) {
          return res.send('错误：' + err.message)
      }
      res.send(data)
  })
}
exports.get = (req, res) => {        //通过id查询数据
  var sql = 'select * from aitravellog where id = ?'    //？用于占位
  db.query(sql, [req.query.id], (err, data) => {
      if(err) {
          return res.send('错误：' + err.message)
      }
      res.send(data)
  })
}

exports.del = (req, res) => {        //通过id删除数据
  var sql = 'delete from aitravellog where id = ?'
  db.query(sql, [req.query.id], (err, data) => {
      if(err) {
          return res.send('错误：' + err.message)
      }
      res.send(data)
  })
}

exports.add = (req, res) => {        //向aitravellog表添加数据
  var sql = 'insert into aitravellog (id,name,address,tel) values (?,?,?,?)'
  db.query(sql, [req.query.id, req.query.name, req.query.address, req.query.tel], (err, data) => {
      if(err) {
          return res.send('错误：' + err.message)
      }
      res.send(data)
  })
}

exports.update = (req, res) => {        //通过id更新数据
  var sql = 'update aitravellog set name = ?, address = ?, tel = ? where id = ?'
  db.query(sql, [req.query.name, req.query.address, req.query.tel, req.query.id], (err, data) => {
      if(err) {
          return res.send('错误：' + err.message)
      }
      res.send(data)
  })
}