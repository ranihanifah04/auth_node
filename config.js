const mysql = require("mysql")

const db = mysql.createConnection({
    host: "localhost",
    password: "",
    user: "root",
    database: "moklet_rest_api"
})

db.connect(err => {
    if (err) console.log(err.message)
    else console.log("koneksi berhasil")
    
})

//export konfigurasi database
module.exports = db
