const express = require("express")
const app = express()

//import fungsi authorization auth
const auth = require("./auth")

const user = require("./route/user")
app.use("/", user)

const pegawai = require("./route/pegawai")
app.use("/pegawai", pegawai)

app.listen(2000, () => {
    console.log("Server run on port 2000");
})

