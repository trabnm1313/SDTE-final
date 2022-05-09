const router = require("express").Router()

const MongoDB = require("mongodb")
const DBClient = MongoDB.MongoClient
const DBURL = "mongodb://host.docker.internal:27018/"

router.get("/getAll", (req, res) => {
    DBClient.connect(DBURL, async (err, db) => {
        if(err){
            console.log(err)
            return res.status(400).send("ERROR")
        }
        const testDB = db.db("test_db")

        testDB.collection("book").find().toArray((err, result) => {
            if(err){
                console.log(err)
            }
            
            res.send(result)
            console.log(result)
            db.close()
        })

        console.log("Database connected")
        
    })
})

module.exports = router