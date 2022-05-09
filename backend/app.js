const Express = require("express")
const app = Express()

app.use(Express.json())

const PORT = 3000

//Route Imports
const readObjectRoute = require("./route/readController")

//Route Usage
app.use("/read", readObjectRoute)

app.get("/test", (req, res) => {
    console.log("FINE")
    res.sendStatus(200)
})

app.listen(PORT, () => console.log(`Application is now lisening on port ${PORT}`))