const Express = require("express")
const app = Express()
const CORS = require('cors')

app.use(Express.json())
app.use(CORS("*"))

const PORT = 3000


//Route Imports
const readObjectRoute = require("./route/readController")
const createObjectRoute = require("./route/createController")

//Route Usage
app.use("/read", readObjectRoute)
app.use("/create", createObjectRoute)

app.get("/test", (req, res) => {
    console.log("FINE")
    res.sendStatus(200)
})

app.listen(PORT, () => console.log(`Application is now lisening on port ${PORT}`))