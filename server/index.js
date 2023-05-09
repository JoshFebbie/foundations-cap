//==== Require packages ================//
const express = require('express')
const cors = require('cors')

//==== Create app instance =============//
const app = express()

//==== Set up middleware ===============//
app.use(express.json())
app.use(cors())

//==== ENDPOINTS =======================//
const {getDinos} = require("./controller")

app.get("/dinos", getDinos)
app.post("/dinos", )


//==== Open door/port for my server ====//
app.listen(3050, () => console.log("Up on 3050"))