/* 系统维护 */
let db = require('../db/index')

/* 获取职工信息 (医生)*/
exports.getdoctorinfo = (req, res) => {
    var sql ='select * from Doctor '
    db.query(sql,(err,data) => {
        if(err) return res.send('错误：' + err.message)
        res.send(data)
    })
}

/* 获取职工信息 (护士)*/
exports.getnurseinfo = (req, res) => {
    var sql ='select * from Nurse '
    db.query(sql,(err,data) => {
        if(err) return res.send('错误：' + err.message)
        res.send(data)
    })
}

/* 修改职工编号 */
exports.updatedoctor = (req, res) => {        
    var sql = 'update doctor set number = ? where number = ?'
    db.query(sql, [req.query.newnumber, req.query.oldnumber ], (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}

exports.updatenurse = (req, res) => {        
    var sql = 'update nurse set number = ? where number = ?'
    db.query(sql, [req.query.newnumber, req.query.oldnumber, ], (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}

/* 项目费用明细表（） */
exports.getitemfeelist = (req, res) => {
    var sql = 'select * from schedule_of_project_costs'
    db.query(sql,(err,data) => {
        if(err) return res.send('错误：' + err.message)
        res.send(data)
    })
}

/* 修改项目费用 */
exports.updateitemfeelist = (req, res) => {        
    var sql = 'update Schedule_of_project_costs set price = ? where item_charge_number = ?'
    db.query(sql, [req.query.price, req.query.itemnum ], (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}
