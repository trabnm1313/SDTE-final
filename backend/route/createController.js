const router = require("express").Router()

const MongoDB = require("mongodb")
const DBClient = MongoDB.MongoClient

//IF test locally
// const DBURL = "mongodb://locahost:27017/"
//IF deploy on docker
const DBURL = "mongodb://host.docker.internal:27000/"

const DBNAME = "final"
const collection = "DTAC"

router.post("/createOne", (req, res) => {
    const data = req.body

    DBClient.connect(DBURL, async (err, db) => {
        if(err){
            console.log(err)
            return res.status(400).send("ERROR")
        }
        console.log("Database connected")
        const testDB = db.db(DBNAME)

        testDB.collection(collection).insertOne(data).then((result) => {
            console.log(result)
            res.send("Successfully Inserted.")
            
            db.close()
        }).catch(err => {
            console.log("Error code:", err.code)
            db.close()

            if(err.code == 11000) return res.send("Too many requests with same data, Please try again later.")
            res.status(400).send("Error, Please contact administrator.")
        })

        
        
    })
})

module.exports = router