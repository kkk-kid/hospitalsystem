/* 住院管理 */
let db = require('../db/index')

/* 获取某一日期病床信息 */
exports.getbedinfo = (req, res) => {
    var sql ='select * from Daliy_bed_statistics_table where date = ?'
    db.query(sql,[req.query.date],(err,data) => {
        if(err) return res.send('错误：' + err.message)
        res.send(data)
    })
}

/* 每日查房记录 */
exports.getwardrecords = (req, res) => {
    var sql = 'select * from Daliy_rounds_log where date = ?'
    db.query(sql,[req.query.date],(err,data) => {
        if(err) return res.send('错误：' + err.message)
        res.send(data)
    })
}

/* 新增查房记录 */
exports.addwardrecords = (req,res) => {
    var sql = 'insert into Daliy_rounds_log (bed_number,date,ward_round_number,patient_situation,doctor_advice) values (?,?,?,?,?)'
    db.query(sql,[req.query.bednum,req.query.date,req.query.staffno,req.query.situation,req.query.orders],(err,data) => {
        if(err) return res.send('错误：' + err.message)
        res.send(data)
    })
}

/* 病人日账单记录 */
exports.getdalybill = (req, res) => {
    var sql = 'select * from daliy_recodes_of_patient_expense where date_ = ?'
    db.query(sql,[req.query.date],(err,data) => {
        if(err) return res.send('错误：' + err.message)
        res.send(data)
    })
}

/* 新增病人日账单 */  
exports.adddaybill = (req,res) => {
    var sql = 'insert into daliy_recodes_of_patient_expense (ID,date_,patient_name,cost_of_medicine_daliy,cost_of_laboratoey_daliy,cost_of_bed_daliy,cost_of_operstion_daliy,total_daliy_rate) values (?,?,?,?,?,?,?,?)'
    db.query(sql,[req.query.idnum,req.query.date,req.query.name,req.query.medicationcost,req.query.laboratorycost,req.query.bedcost,req.query.surgerycost,parseInt(req.query.medicationcost) + parseInt(req.query.laboratorycost) + parseInt(req.query.bedcost) + parseInt(req.query.surgerycost)],(err,data) => {
        
    })
    
    var sql2 = 'SELECT EXISTS(SELECT * FROM total_patient_charge_accounting WHERE ID = ?) AS data_exists;'
    db.query(sql2,[req.query.idnum],(err,data) => {
        if(data[0].data_exists){
            var sql3 = 'update total_patient_charge_accounting set cost_of_medicine = cost_of_medicine + ?, cost_of_laboratoey = cost_of_laboratoey + ?,cost_of_bed = cost_of_bed +?,cost_of_operstion = cost_of_operstion + ?,total_rate = total_rate + ? where ID=?'
            db.query(sql3,[req.query.medicationcost,req.query.laboratorycost,req.query.bedcost,req.query.surgerycost,parseInt(req.query.medicationcost) + parseInt(req.query.laboratorycost) + parseInt(req.query.bedcost) + parseInt(req.query.surgerycost),req.query.idnum],(err,data) => {
                if(err) return res.send('错误：' + err.message)
                res.send("添加")
            })
        }
        else {
            var sql3 = 'insert into total_patient_charge_accounting (ID,patient_name,cost_of_medicine,cost_of_laboratoey,cost_of_bed,cost_of_operstion,total_rate) values(?,?,?,?,?,?,?)'
            db.query(sql3,[req.query.idnum,req.query.name,req.query.medicationcost,req.query.laboratorycost,req.query.bedcost,req.query.surgerycost,parseInt(req.query.medicationcost) + parseInt(req.query.laboratorycost) + parseInt(req.query.bedcost) + parseInt(req.query.surgerycost)],(err,data) => {
                if(err) return res.send('错误：' + err.message)
                res.send("建立")
            })
        }
    })
}

/* 项目费用明细表（） */
exports.itemfeelist = (req, res) => {
    var sql = 'select * from schedule_of_project_costs'
    db.query(sql,(err,data) => {
        if(err) return res.send('错误：' + err.message)
        res.send(data)
    })
}

/* 资金报表 */
exports.fundform = (req, res) => {
    var sql = 'select * from inpatient_department_fund_statement'
    db.query(sql,(err,data) => {
        if(err) return res.send('错误：' + err.message)
        res.send(data)
    })
}

exports.dayfundform = (req, res) => {
    var sql = 'select * from inpatient_department_fund_statement where time_ = ?'
    db.query(sql,[req.query.date],(err,data) => {
        if(err) return res.send('错误：' + err.message)
        res.send(data)
    })
}