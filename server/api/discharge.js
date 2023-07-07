/* 出院管理 */
let db = require('../db/index')

exports.gettotalfeelist = (req, res) => {        
    var sql = 'select * from total_patient_charge_accounting where id = ?'    
    db.query(sql, [req.query.idnum], (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}