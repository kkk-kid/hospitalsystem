/* 入院管理 */

let db = require('../db/index')

/* 办理住院手续 */
/* exports.addinhospital = (req, res) => {        
    var sql = 'insert into patient (ID,patient_name,patient_sex,patient_age,patient_phone,sickroom,check_in_time,sickcondition) values (?,?,?,?,?,?,?,?)'
    db.query(sql, [req.query.idnumber, req.query.name, req.query.gender, req.query.age,req.query.telnumber,req.query.bednum,req.query.date,req.query.situation], (err, data) => {
    if(err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
    var sql2 = 'update daliy_bed_statistics_table set status = ? where date=? and bed_number=? '
    db.query(sql2,[req.query.status,req.query.date,req.query.bednum],(err,data) => {
        
    })
  }    */
  exports.addinhospital = (req, res) => {    
    var sql = 'SELECT EXISTS(SELECT * FROM paycard WHERE ID = ?) AS data_exists;'
    db.query(sql,[req.query.idnumber],(err,data) => {
        if(data[0].data_exists){
            res.send(data)
            var sql1 = 'insert into patient (ID,patient_name,patient_sex,patient_age,patient_phone,sickroom,check_in_time,sickcondition) values (?,?,?,?,?,?,?,?)'
            db.query(sql1, [req.query.idnumber, req.query.name, req.query.gender, req.query.age,req.query.telnumber,req.query.bednum,req.query.date,req.query.situation], (err, data) => {
                
            })
            var sql2 = 'update daliy_bed_statistics_table set status = ? where date=? and bed_number=? '
            db.query(sql2,[req.query.status,req.query.date,req.query.bednum],(err,data) => {
                /* if(err) {
                    return res.send('错误：' + err.message)
                }
                res.send(data) */
            })
        }
        else {
            res.send(data)
        }
    })    
    
  }



/* 收取押金 */
exports.paycharge = (req, res) => {
    var sql = 'update paycard set balance = balance - ? where ID = ?'
    db.query(sql,[req.query.payfee,req.query.idnum],(err,data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })

}


/* 建立入院病历 */
exports.addhospitalcase = (req, res) => {
    var sql = 'insert into Hospitalized_case (case_number,patient_name,patient_sex,patient_age,symptom,medicate,diagnostic_result,doctor_name,employee_number) values (?,?,?,?,?,?,?,?,?)'
    db.query(sql,[req.query.recordid,req.query.name,req.query.gender,req.query.age,req.query.symptom,req.query.medication,req.query.result,req.query.dname,req.query.dno],(err,data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}





/* 获取病人登记表 */
exports.getpatient = (req, res) => {
    var sql = 'select * from patient'
    db.query(sql,(err,data) => {
        if(err) return res.send('错误：' + err.message)
        res.send(data)
    })
}

