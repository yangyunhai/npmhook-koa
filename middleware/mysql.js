const mysql = require("mysql");
let connection = mysql.createConnection({
  host: "121.36.207.158",
  user: "root",
  password: "yYH+496219445",
  database: "webApp",
});

connection.connect((err) => {
  // 如果在这一步抛出错误 请检查数据库配置  比如权限 选中数据库是否存在等等..
  if (err) return console.log("数据库连接失败", err.message);
  console.log("数据库连接成功");
});

const query = function (sql, json = {}) {
  return new Promise((resolve, reject) => {
    connection.query(sql, json, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

module.exports = {
  query,
};
