import mysql from "mysql2/promise";
//パスワード等は個人情報なので隠します。必要でしたら教えてください
export const db = mysql.createPool({
  host: process.env.DB_HOST ,
  user: process.env.DB_USER ,
  password: process.env.DB_PASS ,
  database: process.env.DB_NAME ,
});
