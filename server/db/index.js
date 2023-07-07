let mysql = require('mysql')

let db = mysql.createPool({
  host: 'localhost',     //数据库IP地址
  user: 'root',          //数据库登录账号
  password: 'LiangKAITOUKID2002',      //数据库登录密码
  database: 'hospital'
  
})

module.exports = db

/* const sql = require('mssql');

const config = {
  server: 'localhost',     // SQL Server实例的主机地址
  user: 'sa',              // SQL Server登录账号
  password: 'KAITOUKID1412',  // SQL Server登录密码
  database: 'hospital',   // 数据库名称
  options: {
    encrypt: true , // 如果需要加密连接，则设置为true
    trustServerCertificate: true
  }
};

const db = new sql.ConnectionPool(config);

db.connect(err => {
  if (err) {
    console.error('数据库连接失败:', err);
    return;
  }

  console.log('已成功连接到SQL Server数据库');

  // 可以在这里执行数据库查询和操作

});

module.exports = db; */
